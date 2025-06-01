// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    // Bu bölümü ekleyin veya varsa güncelleyin
    head: {
      htmlAttrs: {
        lang: "tr", // HTML lang özniteliğini de buraya taşıyalım
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
          integrity:
            "sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==", // Bu değeri index.html'den aldık
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      // Eğer <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      // gibi meta etiketlerini de global olarak eklemek isterseniz:
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        // Diğer global meta etiketleri buraya eklenebilir
      ],
    },
  },
});
