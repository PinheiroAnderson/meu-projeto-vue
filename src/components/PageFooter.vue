<template>
    <footer>
        <section class="footer-container">
            <div class="footer-credit text-center">
                <p>
                    &copy; <span>{{ anoAtual }}</span> Desenvolvido por Anderson
                    Pinheiro
                </p>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name: "PageFooter",
    data() {
        return {
            anoAtual: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
.footer-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    background-color: #111;
    color: var(--white);
    width: 100%;
}

.footer-credit {
    font-size: 0.9rem;
}

.footer-credit p {
    margin: 0px;
}
</style>
