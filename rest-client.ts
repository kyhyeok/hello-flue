const conversationUrl = "http://localhost:5173/agents/1";

const headers = {
    Authorization: "Bearer TRUSTME",
    "Content-Type": "application/json",
};

export async function post() {
    const response = await fetch(conversationUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
            kind: "user",
            body: "Install NodeJs in you machine and the build a tiny node server.",
        }),
    });

    const admission = await response.json();
    console.log("POST offset:", admission);
    return admission;
}

export async function get() {
    const response = await fetch(conversationUrl, {headers});
    const conversation = await response.json();
    console.log("GET offset:", conversation.offset);
    return conversation;
}

export async function head() {
    const response = await fetch(conversationUrl, {
        method: "HEAD",
        headers,
    });

    const metadata = Object.fromEntries(response.headers);
    console.log("HEAD headers:", metadata);
    return metadata;
}

export async function stream(offset: string) {
    console.log("Stream from:", offset);

    const response = await fetch(
        `${conversationUrl}?view=updates&offset=${encodeURIComponent(offset)}&live=sse`,
        {headers},
    );

    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const {value, done} = await reader.read();
        if (done) break;

        process.stdout.write(decoder.decode(value));
    }
}


head();