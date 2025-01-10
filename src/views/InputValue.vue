<template>
    <div class="form-group mb-3">
                <label for="nomeInput">Nome</label>
                <input
                    type="text"
                    id="nomeInput"
                    name="nome"
                    class="form-control"
                    placeholder="Seu nome completo"
                    required
                    autofocus
                    v-model="value"
                    @input="
                        () => {
                            isValidate = isName(value);
                        }
                    "
                />
                <div id="nomeHelp" class="form-text">
                    <span v-if="isName(client.name)">Formato invalido</span>
                </div>
            </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isName } from "@/core/helpers/validator";

defineProps({
    value: {
        type
            : [String | Number], default: undefined,
    },
});

const isValidate = ref(true);

</script>

<style scoped></style>