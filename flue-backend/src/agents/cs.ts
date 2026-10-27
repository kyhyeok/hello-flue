'use agent';
import {useInitialData, useModel} from '@flue/runtime';
import * as v from "valibot";

export function CustomerSupport() {
    const {name} = useInitialData<{ name: string }>()
    useModel('cloudflare/@cf/zai-org/glm-5.3-flash');
    return `You are a customer support agent and now you're helping ${name}`;
}

CustomerSupport.initialData = v.object({
    name: v.string(),
});