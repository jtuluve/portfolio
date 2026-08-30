---
title: "Designing a Token-Efficient MCP Server"
description: "How I redesigned Drishti’s MCP server to reduce its initial tool overhead from more than 7,500 tokens to roughly 280."
date: "2026-08-30"
tags:
  - MCP
  - token-optimization
  - LLMs
coverImage: "/articles/designing-token-efficient-mcp-server/cover.jpg"
---


## The problem

When developing [Drishti](https://drishti.manasija.in/?utm_source=jtuluve.is-a.dev/articles/designing-token-efficient-mcp-server) MCP, we followed the general patterns of MCP to declare tools with their descriptions and argument schemas. As the number of tools grew, those definitions began consuming a noticeable portion of the context window. That quickly started to feel inefficient, especially when most requests only required the LLM to use two to four tools.

![LLMs overloaded](./designing-token-efficient-mcp-server/gif1.gif)

## How Claude handles tool discovery

While testing and improving the MCP, I tested the tools by connecting the server to the Claude web app. I noticed that even Claude does not load all the tools together. The LLM gets access to only one tool by default: Claude's own `search_tools`. This means the LLM doesn't know which tools are available from the connected MCP. If it requires a tool, it calls `search_tools` with a query. For example, if the user asked it to summarize the recent news, it would call `search_tools(query='news')`. The `search_tools` tool then returns a set of tools that match the query. For example, Claude's `search_tools` response would look something like this:

```json
Loaded 1 Drishti tool:
  Drishti:get_news:
    ...
These tools are now available for you to call directly.

<functions>
<function>{"description": "Get recent market news articles...", "name": "Drishti:get_news", "parameters": {...}}</function>
</functions>
```

The LLM now has access to the `get_news` tool and can call it, while all the other tools remain unloaded. This saves a large number of tokens, improves the quality of the response, and leaves more context available for deep research. Note that this is not part of the MCP itself. It was a custom solution from the Anthropic team to save tokens, and Anthropic describes the same pattern in its article on [advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use).

## My approach

As I continued developing [Drishti](https://drishti.manasija.in/?utm_source=jtuluve.is-a.dev/articles/designing-token-efficient-mcp-server) MCP, the number of tools grew over time. This meant that every tool's description and schema were loaded at once by clients without built-in deferred tool loading. A few clients, including Claude, avoided this with their own tool-search mechanisms, but users working with other clients or integrating the MCP into their own projects still faced the full initial overhead. To solve this issue, I followed Claude's design but added my own twist. I made three tools directly accessible in the MCP:

1. `search_tools` - search for tools and get the name and short description of each match
2. `describe_tools` - get the full description and schema of the specified tools
3. `execute_tool` - execute a tool with the provided arguments

The `describe_tools` tool is useful because a search may return more matches than necessary, and loading every matching schema may not be worthwhile.

## The results

The result of this design? **A reduction in initial tool overhead from 7,500+ tokens to around 280.** Even when the LLM retrieves the schemas for two or three tools, the total overhead remains around 1,000 tokens. The difference becomes more obvious as you add more tools because the context does not get bloated with every tool definition.

![Happy LLM](./designing-token-efficient-mcp-server/happy.png)

This pattern is most useful for MCP servers with many tools, especially when a typical request needs only a few of them. It adds one or two tool calls for discovery, but in exchange, it keeps the initial context much smaller and leaves more room for the user's task.

## The Tradeoff

While it reduces the tool overhead, it also increases latency since the LLM requires additional tool calls. So it is upto the team to decide the priority.

*P.S. Claude acts funny now: it uses its own `search_tools` tool to find Drishti's `search_tools` tool, then calls that tool to find the actual tools. XD*
