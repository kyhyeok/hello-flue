'use agent';

import {env} from "cloudflare:workers";
import {getSandbox, type Sandbox} from "@cloudflare/sandbox";
import {type AgentProps, useModel, useSandbox} from '@flue/runtime';
import {cloudflareSandbox} from "@flue/runtime/cloudflare";

// wrangler types는 Flue가 생성하는 엔트리를 보지 못해 Sandbox 바인딩을 제네릭 없이 만들므로 직접 지정한다
interface Env {
    Sandbox: DurableObjectNamespace<Sandbox>;
}

export function CustomerSupport({id}: AgentProps) {

    useModel("cloudflare/@cf/zai-org/glm-5.3");
    // agent 인스턴스 id마다 전용 컨테이너 샌드박스를 붙인다 (기본 cwd: /workspace)
    const {Sandbox: sandboxNamespace} = env as unknown as Env;
    useSandbox(cloudflareSandbox(getSandbox(sandboxNamespace, id)));

    return `You are a helper agent that helps the user with files and accounting`;

}
