'use agent';
import {defineMcpConnection, GeneralSubagent, useModel, useSubagent} from '@flue/runtime';
import {optimisticSubAgent, skepticSubAgent} from "../sub-agents";
/*
const pirateSkill = defineSkill({
    name: "pirate",
    description: "Speak like a pirate, use this when the user asks for a caveman explanation.",
    instructions: `
    Explain the subject using nautical metaphors and occasional
    pirate expressions.

    Keep all technical information accurate.
    Keep the response easy to understand.
    Do not turn every word into pirate slang.
    Finish with "Arrr!"
`
})


const cloudflareMcpConnection = defineMcpConnection({
    name: "cloudflare_docs",
    url: "https://docs.mcp.cloudflare.com/mcp",
});
*/

export function CustomerSupport() {

    useModel("cloudflare/@cf/zai-org/glm-5.3");
    useSubagent(GeneralSubagent);
    useSubagent(optimisticSubAgent);
    useSubagent({
        ...skepticSubAgent,
        model: "cloudflare/@cf/deepseek-ai/deepseek-v4-pro-0813",
        thinkingLevel: "high",
    });
    return `You are a advisor  agent. and you help users with ideas, and you analyze them with your team of advisors.`;

    /*
    useSkill(cavemanSkill);
    useSkill(pirateSkill);
    useMcpConnection(cloudflareMcpConnection);
    useModel("cloudflare/@cf/zai-org/glm-5.3-flash");

    return `You are a customer support agent`;
    */

    /*
    const {name} = useInitialData<{ name: string }>()
    const message = useDelivery();
    const [mode, setMode] = usePersistentState<"fast" | "slow">("mode", "slow");
    const writeProgress = useDataWriter("progress", {
        schema: v.object({
            stage: v.string(),
        }),
    });
    useModel(mode === "fast"
            ? "cloudflare/@cf/zai-org/glm-5.3-flash"
            : "cloudflare/@cf/zai-org/glm-5.3", {
            compaction: {
                model: "cloudflare/@cf/zai-org/glm-5.3-flash",
            },
        },
    );
    useTool({
        name: "set_mode",
        description: "Use when the user wants to set the mode of the agent",
        input: v.object({
            mode: v.picklist(["fast", "slow"]),
        }),
        run: ({data: {mode}}) => {
            console.log("New mode is", mode);
            setMode(mode);
            return {
                output: `New mode set to ${mode}`,
            };
        },
    });
    useTool({
        name: "add",
        description: "This is to add a and b",
        input: v.object({
            a: v.number(),
            b: v.number()
        }),
        output: v.object({
            result: v.number()
        }),
        async run({data: {a, b}}) {
            writeProgress({
                stage: "Starting...",
            });
            await new Promise((resolve) => setTimeout(resolve, 5000));

            writeProgress({
                stage: "Finishing...",
            });

            await new Promise((resolve) => setTimeout(resolve, 5000));

            writeProgress({
                stage: "Done.",
            });

            return {
                output: {
                    result: a + b,
                },
            };
        },
    });
    useTool({
        name: "durable_tool",
        description: "This is to add a and b",
        durable: true,
        async run({step}) {
            console.log("starting tool");

            console.log(Date.now());

            const expensiveValue = await step.do("expensive_calculation", async () => {
                // expensive calculation
                await new Promise(resolve => setTimeout(resolve, 10000));
                return 123123123;
            });

            console.log(Date.now());

            await new Promise(resolve => setTimeout(resolve, 10000));

            console.log(expensiveValue);

            // 만약 여기서 사건사고가 일어났다면

            await step.do("save_in_db", () => {
                // save(expensiveValue)
                return "ok";
            });
        },
    });

    useAgentStart(({log}) => {
        log.info("Delivery started");
    });

    useResponseStart(() => ({
        startedAt: new Date().toISOString(),
    }));

    useResponseFinish(({response}) => ({
        usage: response.usage,
    }));

    useAgentFinish(({response, log}) => {
        log.info("Agent finished", {
            toolCalls: response.toolCalls.length,
        });
    });

    return `You are a customer support agent and now you're helping ${name}. you are in ${mode} mode`;
     */
}

// CustomerSupport.initialData = v.object({
//     name: v.string(),
// });