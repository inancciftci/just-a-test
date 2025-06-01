<template>
  <div>
    <div class="doc-container">
      <header class="text-center my-6">
        <nav
          class="flex gap-3 items-center font-bold justify-center mb-10 uppercase text-amber-600"
        >
          <a class="hover:text-gray-800 duration-300" href="#ozet">Özet</a>
          <span>|</span>
          <a class="hover:text-gray-800 duration-300" href="#mockup">Mockups</a>
          <span>|</span>
          <a class="hover:text-gray-800 duration-300" href="#tailwind"
            >Tailwind</a
          >
          <span>|</span>
          <a class="hover:text-gray-800 duration-300" href="#ikonlar"
            >Ikonlar</a
          >
          <span>|</span>
          <a class="hover:text-gray-800 duration-300" href="#gorseller"
            >Görseller</a
          >
        </nav>
        <h1 class="text-3xl font-bold text-gray-800">Task Özeti</h1>
        <p class="text-gray-600 mt-1">
          Çokça kullandığım tailwind classları, ikonlar ve ai ile ürettiğim 1-2
          image.
        </p>
      </header>

      <div id="ozet" class="doc-section">
        <h2 class="doc-title">Neler yaptım?</h2>
        <ul class="list-disc list-inside flex flex-col gap-4">
          <li class="text-gray-700">
            Create, Edit ve List sayfalarını oluşturdum. (Edit sayfası ve create
            sayfası arasındaki tek fark, edit sayfasında bazı atanmış değerler
            mevcut).
          </li>
          <li class="text-gray-700">
            Uzun zamandır yalnızca HTML ve Tailwind Play ile çalışmadığım için
            hali hazırda kullanılan paneli baz alarak bir alıştırma yaptım.
          </li>
        </ul>
        <p class="my-2">Sayfalar;</p>
        <div class="flex flex-col gap-2">
          <a
            target="_blank"
            class="text-[#ED502F]"
            href="/mevcut_panel_alistirma/index.html"
            ><i class="fa-solid fa-angles-right mr-2"></i>Alıştırma için
            yaptığım panel
            <span class="text-gray-700 italic text-sm"
              >(/mevcut_panel_alistirma/index.html)</span
            >
          </a>
          <NuxtLink
            target="_blank"
            class="text-[#ED502F]"
            to="/notifications"
            ><i class="fa-solid fa-angles-right mr-2"></i>Bildirimlerin
            listelendiği sayfa
            <span class="text-gray-700 italic text-sm"
              >(/notifications)</span
            ></NuxtLink
          >
          <NuxtLink
            target="_blank"
            class="text-[#ED502F]"
            to="/notifications/create"
            ><i class="fa-solid fa-angles-right mr-2"></i>Yeni bildirim
            oluşturma formu
            <span class="text-gray-700 italic text-sm"
              >(/notifications/create)</span
            ></NuxtLink
          >
          <NuxtLink
            target="_blank"
            class="text-[#ED502F]"
            to="/notifications/123/edit"
            ><i class="fa-solid fa-angles-right mr-2"></i>Bildirim düzenleme
            formu
            <span class="text-gray-700 italic text-sm"
              >(/notifications/123/edit)</span
            ></NuxtLink
          >
        </div>
      </div>
      <div id="mockup" class="doc-section max-h-[600px] overflow-y-auto">
        <h2 class="doc-title">Oluşturduğum Mockuplar</h2>
        <p class="text-gray-700 mb-4">
          Aşağıda, <code>/notifications/create.html</code> dosyasından aldığım
          tüm mockup’ları görebilirsin. Hepsi tamamiyle değiştirilebilir ve
          üzerlerinde oynamalar yapılabilir. Bunları oluşturmamdaki amaç,
          bildirimleri oluşturan kişinin kullanıcıda nasıl gözükeceğine dair bir
          fikri olması.
        </p>

        <h3 class="doc-subtitle">SMS Template Mockup</h3>
        <div class="template-preview-wrapper mb-6">
          <div
            class="md:w-[350px] mt-2 h-[470px] w-full rounded-3xl overflow-hidden shadow-sm relative"
          >
            <div class="bg-white h-full flex flex-col">
              <div
                class="h-10 bg-gray-100 flex items-center px-3 border-b border-gray-300"
              >
                <button class="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <img
                  src="/assets/mascot.png"
                  alt="Avatar"
                  class="w-8 h-10 rounded-full mr-2"
                />
                <div>
                  <p class="text-gray-800 text-sm font-semibold">ByNoGame</p>
                  <p class="text-xs text-green-500">Online</p>
                </div>
              </div>

              <div class="flex-1 px-3 py-2 overflow-y-auto">
                <div class="flex">
                  <div
                    class="bg-gray-200 rounded-xl rounded-bl-none px-3 py-2 max-w-[75%] mt-2"
                  >
                    <p class="text-gray-800 text-sm">Subject</p>
                    <p class="text-gray-800 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda dolorum quia laborum, odio cumque architecto
                      quas velit accusamus repellendus, consectetur quo! Nostrum
                      inventore, corrupti expedita itaque quisquam aperiam. Nam,
                      quasi.
                    </p>
                    <span class="block text-[10px] text-gray-500 mt-1">
                      10:12 AM
                    </span>
                  </div>
                </div>
              </div>

              <div class="h-10 bg-gray-100"></div>
            </div>
          </div>
        </div>

        <h3 class="doc-subtitle">Email Template Mockup</h3>
        <div class="template-preview-wrapper mb-6">
          <div
            class="md:w-[350px] mt-2 h-[470px] w-full bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-200 relative"
          >
            <div
              class="h-10 bg-white flex justify-between items-center px-3 border-b border-gray-300"
            >
              <i class="fa-brands fa-mailchimp"></i>
              <img src="/assets/mascot.png" class="w-8" />
            </div>

            <div class="h-[430px] overflow-y-auto bg-white px-4 py-3">
              <div class="border-b border-gray-200 pb-2 mb-2">
                <h4 class="text-gray-900 font-semibold text-sm">Subject</h4>
                <span class="block text-[10px] text-gray-500 mt-1">
                  From: noreply@bynogame.com | To: demo@demomail.com
                </span>
              </div>
              <div class="text-gray-800 text-sm space-y-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum pariatur temporibus exercitationem sequi doloremque
                  inventore, beatae veritatis eum? Cumque laborum, voluptates
                  repellendus distinctio illo eius necessitatibus sit non, alias
                  pariatur!
                </p>
                <p>
                  Doloremque, similique! Obcaecati vitae, dicta, incidunt iste
                  eligendi quidem officiis aliquam, ad dolore suscipit odio
                  ullam eaque numquam cupiditate? Cumque hic illum saepe impedit
                  sit aliquid maiores!
                </p>
              </div>
              <div class="mt-3">
                <span class="block text-[10px] text-gray-500">
                  Mar 28, 2025, 10:12 AM
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3 class="doc-subtitle">Telegram Template Mockup</h3>
        <div class="template-preview-wrapper mb-6">
          <div
            class="md:w-[350px] mt-2 h-[470px] w-full bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-200 relative flex flex-col justify-between"
          >
            <div
              class="h-10 bg-white flex items-center justify-between px-3 border-b border-gray-300"
            >
              <div class="flex items-center gap-2">
                <button class="mr-3">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <img src="/assets/mascot.png" alt="Avatar" class="w-8 mr-2" />
                <div>
                  <p class="text-gray-800 text-sm font-semibold">ByNoGame</p>
                  <p class="text-xs text-gray-500">online</p>
                </div>
              </div>
              <button>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div class="flex-1 px-3 py-2 overflow-y-auto">
              <div class="flex">
                <div
                  class="bg-white rounded-xl rounded-bl-none border border-gray-200 px-3 py-2 max-w-[75%] mt-2 shadow"
                >
                  <p class="text-gray-800 text-sm">Subject</p>
                  <p class="text-gray-800 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ducimus voluptatem officiis ab illo rem aperiam delectus
                    quod facere, et earum maxime dolore similique mollitia saepe
                    modi, voluptatibus voluptatum fugiat itaque!
                  </p>
                  <span class="block text-[10px] text-gray-500 mt-1">
                    10:12 AM
                  </span>
                </div>
              </div>
            </div>
            <div class="h-10 bg-white border-t border-gray-300"></div>
          </div>
        </div>

        <h3 class="doc-subtitle">Discord Template Mockup</h3>
        <div class="template-preview-wrapper mb-6">
          <div
            class="md:w-[350px] mt-2 h-[470px] w-full bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-700 flex flex-col justify-between relative text-white"
          >
            <div
              class="h-10 bg-gray-900 flex items-center px-3 border-b border-gray-700"
            >
              <i class="fa-brands fa-discord mr-2"></i>
              <span class="text-gray-100 font-semibold text-sm"
                >ByNoGame Notifications</span
              >
              <div class="flex-1"></div>
              <button>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div
              class="h-8 bg-gray-850 flex items-center px-3 border-b border-gray-700"
            >
              <span class="text-gray-400 text-xs font-medium"># general</span>
            </div>
            <div class="flex-1 px-3 py-2 overflow-y-auto">
              <div class="flex items-start mt-2">
                <img
                  src="/assets/mascot.png"
                  alt="User Avatar"
                  class="w-8 rounded-full mr-2"
                />
                <div>
                  <div class="flex items-center space-x-1">
                    <span class="text-blue-400 font-medium text-sm"
                      >byNoGame</span
                    >
                    <span class="text-gray-500 text-[10px]"
                      >Today at 10:12 AM</span
                    >
                  </div>
                  <p class="font-bold text-sm">Subject</p>
                  <p class="text-gray-200 text-sm mt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio fugiat deleniti corporis, facere autem beatae
                    fuga modi sequi consequatur sunt.
                  </p>
                </div>
              </div>
            </div>
            <div class="h-10 bg-gray-900"></div>
          </div>
        </div>

        <h3 class="doc-subtitle">Popup Notifications Mockup</h3>
        <div class="template-preview-wrapper mb-6">
          <div class="grid grid-cols-2 gap-4">
            <div
              class="flex flex-col bg-green-500 text-white rounded-lg p-4 shadow-md"
            >
              <p class="font-semibold text-sm mb-1">Subject</p>
              <p class="text-xs mb-2">Your action completed successfully.</p>
              <div class="self-end">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            <div
              class="flex flex-col bg-orange-500 text-white rounded-lg p-4 shadow-md"
            >
              <p class="font-semibold text-sm mb-1">Subject</p>
              <p class="text-xs mb-2">Please check your input values.</p>
              <div class="self-end">
                <i class="fa-solid fa-bomb"></i>
              </div>
            </div>
            <div
              class="flex flex-col bg-red-500 text-white rounded-lg p-4 shadow-md"
            >
              <p class="font-semibold text-sm mb-1">Subject</p>
              <p class="text-xs mb-2">Something went wrong. Try again.</p>
              <div class="self-end">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
            <div
              class="flex flex-col bg-gray-500 text-white rounded-lg p-4 shadow-md"
            >
              <p class="font-semibold text-sm mb-1">Subject</p>
              <p class="text-xs mb-2">You have new updates available.</p>
              <div class="self-end">
                <i class="fa-solid fa-circle-info"></i>
              </div>
            </div>
          </div>
        </div>

        <h3 class="doc-subtitle">Site Notification Mockup</h3>
        <div class="template-preview-wrapper">
          <div
            class="w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 p-3 flex items-start gap-3"
          >
            <div class="flex-shrink-0">
              <img src="/assets/mascot.png" alt="mascot" class="w-10" />
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800 text-sm leading-snug">
                Title
              </p>
              <p class="text-xs text-gray-600 mt-1 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio.
              </p>
              <div class="flex items-center mt-2">
                <span class="text-[10px] text-gray-500"
                  >ByNoGame • Just now</span
                >
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="tailwind" class="doc-section">
        <h2 class="doc-title">Kullanmış Olduğum CSS Sınıfları</h2>
        <p class="text-gray-700 mb-3">
          Projede arayüzü oluştururken Tailwind CSS’in utility sınıflarından ve
          kendi tanımladığım bileşen sınıflarından faydalandım. Aşağıda sık sık
          tekrar eden ve özel olarak belirlediğim bazı sınıfları görebilirsin:
        </p>

        <h3 class="doc-subtitle">
          Özel Tanımlanmış Bileşen Sınıfları (<code>@layer components</code>):
        </h3>
        <pre
          class="code-block"
        ><code>.form-label { @apply block text-sm font-bold text-gray-700; }
.form-label-group { @apply flex flex-col gap-2; }
.input-white { @apply bg-white py-2 px-3 rounded-lg shadow-sm; }
.input-gray { @apply bg-gray-100 py-2 px-3 rounded-lg shadow-sm; }
.section-heading { @apply text-lg font-semibold text-gray-700 mb-3; }
.textarea-styled { @apply mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500; }
.checkbox-primary { @apply h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500; }
.checkbox-danger { @apply h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500; }
.checkbox-label-wrapper { @apply flex items-center gap-2; }
.form-row-responsive { @apply grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2 items-center; }
.form-row-fixed-2col { @apply grid grid-cols-2 gap-4 md:gap-10 items-center; }
.template-section-wrapper { @apply bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4; }
.template-preview-wrapper { @apply flex flex-col items-center justify-center; }
.form-label-mt4 { @apply block text-sm font-bold text-gray-700 mt-4; }</code></pre>

        <h3 class="doc-subtitle">Sıkça Kullandığım Genel Utilityler:</h3>
        <ul class="list-disc list-inside pl-4 text-gray-700 space-y-1 mt-2">
          <li>
            <strong>Layout (Düzen):</strong> <code>flex</code>,
            <code>grid</code>, <code>grid-cols-*</code>,
            <code>items-center</code>, <code>justify-between</code>,
            <code>justify-center</code>, <code>gap-*</code>
          </li>
          <li>
            <strong>Spacing (Boşluk):</strong> <code>p-*</code>,
            <code>m-*</code> (ve yönleri <code>px</code>, <code>py</code>,
            <code>mt</code>, <code>mb</code> vb.), <code>space-y-*</code>
          </li>
          <li>
            <strong>Sizing (Boyutlandırma):</strong> <code>w-full</code>,
            <code>w-*</code>, <code>h-*</code>, <code>max-w-*</code>
          </li>
          <li>
            <strong>Typography (Yazı Tipi):</strong> <code>text-sm</code>,
            <code>text-lg</code>, <code>font-bold</code>,
            <code>font-semibold</code>, <code>text-gray-*</code>,
            <code>text-[#ED502F]</code>
          </li>
          <li>
            <strong>Backgrounds (Arka Plan):</strong> <code>bg-white</code>,
            <code>bg-gray-*</code>, <code>bg-[#ED502F]</code> (özel renk -> bunu
            bynogame'in marka bilgisinden aldım.
            <a
              class="font-bold text-blue-800"
              href="https://about.bynogame.com/logos"
              target="_blank"
              >Link</a
            >)
          </li>
          <li>
            <strong>Borders (Kenarlıklar):</strong> <code>border</code>,
            <code>border-gray-*</code>, <code>rounded-lg</code>,
            <code>rounded-full</code>
          </li>
          <li>
            <strong>Shadows (Gölgeler):</strong> <code>shadow-sm</code>,
            <code>shadow-md</code>
          </li>
          <li>
            <strong>Effects (Efektler):</strong> <code>hover:bg-*</code>,
            <code>focus:ring-*</code>
          </li>
        </ul>
      </div>

      <div id="ikonlar" class="doc-section">
        <h2 class="doc-title">Font Awesome Ikonları</h2>
        <p class="text-gray-700 mb-3">
          Atılan panelde kullanılan ikonları göz önüne alarak uygun ikonları
          seçmeye çalıştım.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div class="icon-list-item">
            <i class="fa-solid fa-chevron-right fa-fw text-slate-400"></i>
            <code>fa-solid fa-chevron-right</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-plus fa-fw text-[#ED502F]"></i>
            <code>fa-solid fa-plus</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-copy fa-fw text-[#ED502F]"></i>
            <code>fa-solid fa-copy</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-pen-to-square fa-fw text-green-500"></i>
            <code>fa-solid fa-pen-to-square</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-trash fa-fw text-red-500"></i>
            <code>fa-solid fa-trash</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-circle-check fa-fw text-[green-500]"></i>
            <code>fa-solid fa-circle-check</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-circle-xmark fa-fw text-red-500"></i>
            <code>fa-solid fa-circle-xmark</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-check fa-fw text-[#ED502F]"></i>
            <code>fa-solid fa-check</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-bomb fa-fw text-[#ED502F]"></i>
            <code>fa-solid fa-bomb</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-xmark fa-fw text-[#ED502F]"></i>
            <code>fa-solid fa-xmark</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-circle-info fa-fw text-[#ED502F]"></i>
            <code>fa-solid fa-circle-info</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-brands fa-mailchimp fa-fw text-gray-700"></i>
            <code>fa-brands fa-mailchimp</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-chevron-left fa-fw text-gray-700"></i>
            <code>fa-solid fa-chevron-left</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-solid fa-bars fa-fw text-gray-700"></i>
            <code>fa-solid fa-bars</code>
          </div>
          <div class="icon-list-item">
            <i class="fa-brands fa-discord fa-fw text-[#ED502F]"></i>
            <code>fa-brands fa-discord</code>
          </div>
        </div>
      </div>

      <div id="gorseller" class="doc-section">
        <h2 class="doc-title">Kullandığım Görseller</h2>
        <p class="text-gray-700 mb-3">
          Çok boş ve dümdüz bir layout oluşturmayı sevmiyorum, yalnızca
          görsellik katması amacıya Sora(openAI) ile bir bir kaç image
          oluşturdum.
        </p>
        <div class="image-list-item">
          <img
            src="/assets/form.png"
            alt="Form ikonu"
            class="w-10 h-10 object-contain"
          />
          <code>/assets/form.png</code> (Form sayfalarının girişinde)
        </div>
        <div class="image-list-item">
          <img
            src="/assets/mascot.png"
            alt="Maskot"
            class="w-10 h-10 object-contain"
          />
          <code>/assets/mascot.png</code> (Mockup'larda ve çeşitli yerlerde
          marka/profil görseli)
        </div>
        <div class="image-list-item">
          <img
            src="/assets/can-choose.png"
            alt="Seçim yapabilir ikonu"
            class="w-10 h-10 object-contain"
          />
          <code>/assets/can-choose.png</code> (Kullanıcı metot seçebilir mi
          bölümü çok boş kaldığı için)
        </div>
        <div class="image-list-item">
          <img
            src="/assets/total.png"
            alt="Toplam bildirimler"
            class="w-10 h-10 object-contain"
          />
          <code>/assets/total.png</code> (Liste sayfasında toplam bildirim kartı
          görseli)
        </div>
        <div class="image-list-item">
          <img
            src="/assets/active-2.png"
            alt="Aktif bildirimler"
            class="w-10 h-10 object-contain"
          />
          <code>/assets/active-2.png</code> (Liste sayfasında aktif bildirim
          kartı görseli)
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Task Özeti / Inanc Citfci',
})
</script>

<style scoped>
</style>