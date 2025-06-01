<!-- pages/notifications/create.vue -->
<template>
  <div class="p-4">
    <main class="max-w-[1280px] flex flex-col gap-6 p-6 mx-auto bg-white rounded-lg">
      <div class="flex justify-between items-center">
        <NuxtLink to="/notifications" class="text-sm text-[#ED502F] hover:underline">
          <i class="fa-solid fa-arrow-left mr-2"></i>Go back to List
        </NuxtLink>
        <div class="flex items-center gap-2 text-sm font-thin">
          <NuxtLink to="/" class="text-slate-400 hover:text-slate-600">Dashboard</NuxtLink>
          <i class="fa-solid fa-chevron-right text-slate-400"></i>
          <NuxtLink to="/notifications" class="text-slate-400 hover:text-slate-600">Notifications</NuxtLink>
          <i class="fa-solid fa-chevron-right text-slate-400"></i>
          <span class="font-[400]">Create</span>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <img src="/assets/form.png" class="w-32 h-32 md:w-40 md:h-40" alt="Form Icon" />
        <h2 class="text-2xl font-bold text-gray-800">
          Create New Notification
        </h2>
        <p class="text-gray-600 text-sm text-center max-w-[460px]">
          You can easily configure the titles, properties and methods of the
          notification to be sent.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="bg-gray-100 p-4 rounded-lg space-y-4 md:space-y-6">
        <div class="form-row-responsive">
          <div class="form-label-group">
            <label class="form-label" for="name">Notification Name</label>
            <input class="input-white" type="text" id="name" placeholder="Enter a notification name" v-model="formData.name" />
          </div>
          <div class="form-label-group">
            <label class="form-label" for="type">Notification Type</label>
            <input class="input-white" type="text" id="type" placeholder="Enter the type of the notification" v-model="formData.type" />
          </div>
        </div>

        <div class="form-row-fixed-2col">
          <div class="form-label-group">
            <label class="form-label" for="category">Notification Category</label>
            <select id="category" class="input-white" v-model="formData.category">
              <option value="" disabled selected>Select a category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
          </div>
          <div class="form-label-group">
            <label class="form-label" for="tag">Notification Tag</label>
            <select id="tag" class="input-white" v-model="formData.tag">
              <option value="" disabled selected>Select a tag</option>
              <option value="Tag 1">Tag 1</option>
              <option value="Tag 2">Tag 2</option>
              <option value="Tag 3">Tag 3</option>
            </select>
          </div>
        </div>

        <div>
          <label for="description" class="form-label"> Description </label>
          <textarea name="description" id="description" rows="5" placeholder="Enter a description" class="textarea-styled" v-model="formData.description"></textarea>
        </div>

        <h3 class="section-heading">Available Methods</h3>
        <div class="form-row-responsive">
          <div class="bg-white p-4 rounded-lg">
            <div class="space-y-2">
              <div v-for="method in allAvailableMethods" :key="method.value" class="flex items-center justify-between">
                <label class="checkbox-label-wrapper">
                  <input type="checkbox" :value="method.value" v-model="formData.availableMethods" class="checkbox-primary" />
                  <span class="text-gray-700">{{ method.label }}</span>
                </label>
                <label class="checkbox-label-wrapper">
                  <input type="checkbox" v-model="formData.forceMethods[method.value]" class="checkbox-danger" />
                  <span class="text-gray-700 text-sm">Force to use</span>
                </label>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4 md:gap-10 text-right relative items-center md:items-end">
            <img src="/assets/can-choose.png" class="w-24 h-24 md:w-32 md:h-32 mb-4 absolute right-65 md:right-60 md:-top-5" alt="Can Choose Icon" />
            <div class="form-label-group w-full md:w-auto text-right">
              <span class="text-sm font-bold text-gray-700">Can User Choose Methods?</span>
              <div class="flex justify-end gap-2 items-center">
                <input type="checkbox" id="canMethod" v-model="formData.canUserChooseMethods" class="checkbox-primary"/>
                <label for="canMethod" class="text-gray-700">User can choose methods</label>
              </div>
            </div>
            <div class="form-label-group w-full md:w-auto text-right">
              <span class="text-sm font-bold text-gray-700">Can User Choose Multiple Methods?</span>
              <div class="flex justify-end gap-2 items-center">
                <input type="checkbox" id="canMultiple" v-model="formData.canUserChooseMultipleMethods" class="checkbox-primary"/>
                <label for="canMultiple" class="text-gray-700">User can choose multiple methods</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <h3 class="section-heading">Default Methods & Status</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 p-4 bg-white rounded-lg gap-4 md:gap-10">
            <div class="form-label-group">
              <span class="form-label">Sms Providers</span>
              <div v-for="provider in smsProviderOptions" :key="provider.value" class="checkbox-label-wrapper">
                <input :id="provider.value" type="checkbox" :value="provider.value" v-model="formData.smsProviders" class="checkbox-primary"/>
                <label :for="provider.value" class="text-gray-700">{{ provider.label }}</label>
              </div>
            </div>
            <div class="form-label-group">
              <span class="form-label">Smtp Providers</span>
              <div v-for="provider in smtpProviderOptions" :key="provider.value" class="checkbox-label-wrapper">
                <input :id="provider.value" type="checkbox" :value="provider.value" v-model="formData.smtpProviders" class="checkbox-primary"/>
                <label :for="provider.value" class="text-gray-700">{{ provider.label }}</label>
              </div>
              <span class="form-label mt-2 -mb-1">Active</span>
              <div class="checkbox-label-wrapper">
                <input id="active" type="checkbox" v-model="formData.active" class="checkbox-primary"/>
                <label for="active" class="text-gray-700">Notification is Active</label>
              </div>
            </div>
          </div>
        </div>

        <div v-if="formData.availableMethods.includes('popup')">
          <h3 class="section-heading">Pop-up Options (Toast Style)</h3>
          <div class="bg-white rounded-lg p-4 flex flex-col gap-4">
            <div class="form-row-fixed-2col">
              <div class="form-label-group">
                <label class="form-label" for="position">Position</label>
                <select id="position" class="input-gray" v-model="formData.popupConfig.position">
                  <option value="" disabled selected>Select a position</option>
                  <option value="right-bottom">right-bottom</option>
                  <option value="top-center">top-center</option>
                  <option value="bottom-center">bottom-center</option>
                </select>
              </div>
              <div class="form-label-group">
                <label class="form-label" for="popupstyle">Style</label>
                <select id="popupstyle" class="input-gray" v-model="formData.popupConfig.style">
                  <option value="" disabled selected>Select a style</option>
                  <option value="info">Info</option>
                  <option value="error">Error</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                </select>
              </div>
            </div>
            <div class="form-row-fixed-2col">
              <div class="form-label-group">
                <label class="form-label" for="timeout">Popup Timeout(ms)</label>
                <input type="number" min="0" placeholder="E.g. 3000" id="timeout" class="input-gray" v-model.number="formData.popupConfig.timeout" />
              </div>
              <div class="form-label-group">
                <label class="form-label" for="popupActions">Actions (Placeholder)</label>
                 <select id="popupActions" class="input-gray" v-model="formData.popupConfig.actions">
                  <option value="" disabled selected>Select an action</option>
                  <option value="action1">Action 1</option>
                </select>
              </div>
            </div>
             <div class="flex flex-col gap-4">
              <div class="form-label-group">
                <label class="form-label" for="popupLanguage">Language</label>
                <select id="popupLanguage" class="input-gray" v-model="formData.popupConfig.language">
                  <option value="" disabled selected>Select a language</option>
                  <option value="tr">TR</option>
                  <option value="en">EN</option>
                </select>
              </div>
              <div>
                <label for="popupText" class="form-label">Popup Text Content</label>
                <textarea name="popupText" id="popupText" rows="3" placeholder="Enter text for popup" class="textarea-styled" v-model="formData.popupConfig.contentBody"></textarea>
                <button type="button" @click="sendTestPopup" class="mt-2 bg-[#ED502F] text-white px-2 py-1 rounded-lg text-sm hover:bg-opacity-90">
                  Show Test Popup
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="formData.availableMethods.includes('sms')">
          <h3 class="section-heading">SMS Template</h3>
          <div class="template-section-wrapper">
            <div class="form-label-group">
              <label class="form-label" for="smsSubject">Subject (Internal Use)</label>
              <input id="smsSubject" class="input-gray" type="text" placeholder="Enter a subject for SMS" v-model="formData.smsTemplate.subject" />
              <label class="form-label-mt4" for="smsContent">Content</label>
              <textarea class="input-gray" placeholder="Enter SMS content" id="smsContent" rows="10" v-model="formData.smsTemplate.content"></textarea>
            </div>
            <div class="template-preview-wrapper">
              <span class="form-label">Template Preview</span>
              <div class="md:w-[300px] mt-2 h-[400px] w-full rounded-3xl overflow-hidden shadow-sm relative border">
                <div class="bg-white h-full flex flex-col">
                  <div class="h-10 bg-gray-100 flex items-center px-3 border-b border-gray-300">
                    <button type="button" class="mr-3 focus:outline-none"><i class="fa-solid fa-chevron-left text-blue-500"></i></button>
                    <img src="/assets/mascot.png" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                    <div><p class="text-gray-800 text-sm font-semibold">ByNoGame</p><p class="text-xs text-green-500">Online</p></div>
                  </div>
                  <div class="flex-1 px-3 py-2 overflow-y-auto">
                    <div class="flex">
                      <div class="bg-gray-200 rounded-xl rounded-bl-none px-3 py-2 max-w-[85%] mt-2">
                        <p class="text-gray-800 text-sm font-semibold">{{ formData.smsTemplate.subject || 'Subject Placeholder' }}</p>
                        <p class="text-gray-800 text-sm whitespace-pre-wrap">{{ formData.smsTemplate.content || 'SMS content will appear here.' }}</p>
                        <span class="block text-[10px] text-gray-500 mt-1">10:12 AM</span>
                      </div>
                    </div>
                  </div>
                  <div class="h-10 bg-gray-100 border-t"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="formData.availableMethods.includes('email')">
          <h3 class="section-heading">Email Template</h3>
          <div class="template-section-wrapper">
            <div class="form-label-group">
              <label class="form-label" for="emailSubject">Subject</label>
              <input id="emailSubject" class="input-gray" type="text" placeholder="Enter an email subject" v-model="formData.emailTemplate.subject" />
              <label class="form-label-mt4" for="emailContent">Content (HTML supported)</label>
              <textarea class="input-gray" placeholder="Enter email content (HTML is okay)" id="emailContent" rows="10" v-model="formData.emailTemplate.content"></textarea>
            </div>
            <div class="template-preview-wrapper">
              <span class="form-label">Template Preview</span>
              <div class="md:w-[300px] mt-2 h-[400px] w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200 relative">
                <div class="h-10 bg-white flex justify-between items-center px-3 border-b border-gray-300">
                  <i class="fa-brands fa-mailchimp text-xl"></i>
                  <img src="/assets/mascot.png" class="w-7 h-7 object-cover" alt="Mascot"/>
                </div>
                <div class="h-[calc(400px-40px)] overflow-y-auto bg-white px-4 py-3">
                  <div class="border-b border-gray-200 pb-2 mb-2">
                    <h4 class="text-gray-900 font-semibold text-sm">{{ formData.emailTemplate.subject || 'Email Subject Placeholder' }}</h4>
                    <span class="block text-[10px] text-gray-500 mt-1">From: noreply@example.com | To: user@example.com</span>
                  </div>
                  <div class="text-gray-800 text-sm space-y-2 prose prose-sm max-w-none" v-html="formData.emailTemplate.content || '<p>Email content will appear here.</p><p>You can use <strong>HTML</strong>.</p>'"></div>
                  <div class="mt-3"><span class="block text-[10px] text-gray-500">Mar 28, 2025, 10:12 AM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="formData.availableMethods.includes('telegram')">
          <h3 class="section-heading">Telegram Template</h3>
          <div class="template-section-wrapper">
            <div class="form-label-group">
              <label class="form-label" for="telegramSubject">Subject (For Bot Info)</label>
              <input id="telegramSubject" class="input-gray" type="text" placeholder="Enter a subject for Telegram bot" v-model="formData.telegramTemplate.subject" />
              <label class="form-label-mt4" for="telegramMessage">Message Content</label>
              <textarea class="input-gray" placeholder="Enter Telegram message" id="telegramMessage" rows="10" v-model="formData.telegramTemplate.content"></textarea>
            </div>
            <div class="template-preview-wrapper">
              <span class="form-label">Template Preview</span>
              <div class="md:w-[300px] mt-2 h-[400px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-300 relative flex flex-col justify-between">
                <div class="h-10 bg-white flex items-center justify-between px-3 border-b border-gray-300">
                  <div class="flex items-center gap-2">
                    <button type="button" class="mr-1 focus:outline-none"><i class="fa-solid fa-chevron-left"></i></button>
                    <img src="/assets/mascot.png" alt="Avatar" class="w-7 h-7 rounded-full mr-1 object-cover" />
                    <div><p class="text-gray-800 text-sm font-semibold">{{ formData.telegramTemplate.subject || 'Bot Name' }}</p><p class="text-xs text-gray-500">online</p></div>
                  </div>
                  <button type="button" class="focus:outline-none"><i class="fa-solid fa-bars"></i></button>
                </div>
                <div class="flex-1 px-3 py-2 overflow-y-auto">
                  <div class="flex">
                    <div class="bg-white rounded-xl rounded-bl-none border border-gray-200 px-3 py-2 max-w-[85%] mt-2 shadow">
                      <p class="text-gray-800 text-sm whitespace-pre-wrap">{{ formData.telegramTemplate.content || 'Telegram message content here.' }}</p>
                      <span class="block text-[10px] text-gray-500 mt-1 text-right">10:12 AM <i class="fa-solid fa-check-double text-blue-500 ml-1"></i></span>
                    </div>
                  </div>
                </div>
                <div class="h-10 bg-white border-t border-gray-300 px-2 flex items-center">
                  <input type="text" placeholder="Message" class="flex-1 bg-gray-100 rounded-full px-3 py-1 text-sm focus:outline-none"/>
                  <button type="button" class="ml-2 text-gray-500 hover:text-blue-500 focus:outline-none"><i class="fa-solid fa-paperclip"></i></button>
                  <button type="button" class="ml-2 text-gray-500 hover:text-blue-500 focus:outline-none"><i class="fa-solid fa-microphone"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Discord Template Section -->
        <div v-if="formData.availableMethods.includes('discord')">
          <h3 class="section-heading">Discord Template</h3>
          <div class="template-section-wrapper">
            <div class="form-label-group">
              <label class="form-label" for="discordSubject">Embed Title (Optional)</label>
              <input id="discordSubject" class="input-gray" type="text" placeholder="Enter embed title" v-model="formData.discordTemplate.subject" />
              <label class="form-label-mt4" for="discordMessage">Message Content (Markdown supported)</label>
              <textarea class="input-gray" placeholder="Enter Discord message" id="discordMessage" rows="10" v-model="formData.discordTemplate.content"></textarea>
            </div>
            <div class="template-preview-wrapper">
              <span class="form-label">Template Preview</span>
               <div class="md:w-[300px] mt-2 h-[400px] w-full bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-gray-600 flex flex-col justify-between relative text-white">
                <div class="h-10 bg-gray-800 flex items-center px-3 border-b border-gray-600">
                  <i class="fa-brands fa-discord mr-2 text-xl"></i>
                  <span class="text-gray-100 font-semibold text-sm"># general</span>
                  <div class="flex-1"></div><button type="button" class="focus:outline-none"><i class="fa-solid fa-bars"></i></button>
                </div>
                <div class="flex-1 px-3 py-2 overflow-y-auto">
                  <div class="flex items-start mt-2">
                    <img src="/assets/mascot.png" alt="User Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                    <div>
                      <div class="flex items-center space-x-1">
                        <span class="text-blue-400 font-medium text-sm">BotName</span>
                        <span class="text-gray-400 text-[10px]">Today at 10:12 AM</span>
                      </div>
                      <div class="mt-1 p-3 bg-gray-800 rounded-lg border border-gray-600">
                        <p v-if="formData.discordTemplate.subject" class="font-bold text-sm text-blue-300 mb-1">{{ formData.discordTemplate.subject }}</p>
                        <p class="text-gray-200 text-sm whitespace-pre-wrap">{{ formData.discordTemplate.content || 'Discord message content here. **Markdown** is cool!' }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-10 bg-gray-800 border-t border-gray-600 px-3 flex items-center">
                    <input type="text" placeholder="Message #general" class="bg-gray-600 text-gray-200 placeholder-gray-400 rounded-md px-3 py-1 text-sm flex-1 focus:outline-none"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="formData.availableMethods.includes('site')">
          <h3 class="section-heading">Site Notification (In-App/Push Style)</h3>
          <div class="template-section-wrapper">
            <div class="form-label-group">
              <label class="form-label" for="sitePushSubject">Title</label>
              <input id="sitePushSubject" class="input-gray" type="text" placeholder="Enter notification title" v-model="formData.sitePushTemplate.subject" />
              <label class="form-label-mt4" for="sitePushContent">Body</label>
              <textarea class="input-gray" placeholder="Enter notification body" id="sitePushContent" rows="6" v-model="formData.sitePushTemplate.content"></textarea>
            </div>
            <div class="template-preview-wrapper">
              <span class="form-label mb-2">Template Preview</span>
              <div class="w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 p-3 flex items-start gap-3">
                <div class="flex-shrink-0"><img src="/assets/mascot.png" alt="mascot" class="w-10 h-10 object-cover rounded-full" /></div>
                <div class="flex-1">
                  <p class="font-semibold text-gray-800 text-sm leading-snug">{{ formData.sitePushTemplate.subject || 'Notification Title' }}</p>
                  <p class="text-xs text-gray-600 mt-1 leading-tight">{{ formData.sitePushTemplate.content || 'Notification body content will appear here.' }}</p>
                  <div class="flex items-center mt-2"><span class="text-[10px] text-gray-500">BrandName • Just now</span></div>
                </div>
                <button type="button" class="text-gray-400 hover:text-gray-600 focus:outline-none"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center pt-4">
          <button class="bg-[#ED502F] shadow-md px-6 py-3 rounded-lg font-bold text-white hover:bg-opacity-90 transition-colors" type="submit">
            Save & Create Notification
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Create Notification',
});

const formData = ref({
  name: '',
  type: '',
  category: '',
  tag: '',
  description: '',
  availableMethods: [] as string[], 
  forceMethods: {} as Record<string, boolean>, 
  canUserChooseMethods: false,
  canUserChooseMultipleMethods: false,
  smsProviders: [] as string[],
  smtpProviders: [] as string[],
  active: true,
  popupConfig: {
    position: '',
    style: '',
    timeout: 3000,
    actions: '',
    language: 'en',
    contentBody: '', 
    subject: '', 
  },
  smsTemplate: {
    subject: '',
    content: '',
  },
  emailTemplate: {
    subject: '',
    content: '',
  },
  telegramTemplate: {
    subject: '', 
    content: '', 
  },
  discordTemplate: {
    subject: '', 
    content: '', 
  },
  
  sitePushTemplate: { 
    subject: '', 
    content: '', 
  },
});

const allAvailableMethods = [
  { value: 'sms', label: 'SMS' },
  { value: 'email', label: 'Email' },
  { value: 'site', label: 'Site' },
  { value: 'popup', label: 'Popup' },  
  { value: 'telegram', label: 'Telegram' },
  { value: 'discord', label: 'Discord' },
];

const smsProviderOptions = [
    { value: 'mobilpark', label: 'Mobilpark' },
    { value: 'infobip', label: 'Infobip' },
    { value: 'verimor', label: 'Verimor' },
    { value: 'netgsm', label: 'Netgsm' },
];

const smtpProviderOptions = [
    { value: 'amazon', label: 'Amazon' },
    { value: 'sendgrid', label: 'SendGrid' },
];


const handleSubmit = () => {
  console.log('Form Data Submitted:', JSON.parse(JSON.stringify(formData.value)));
};

const sendTestPopup = () => {
  if (!formData.value.popupConfig.contentBody) {
    alert('Please enter some text for the popup content to send a test.');
    return;
  }
  alert(`Test Popup:
Style: ${formData.value.popupConfig.style || 'default'}
Position: ${formData.value.popupConfig.position || 'default'}
Language: ${formData.value.popupConfig.language}
Content: ${formData.value.popupConfig.contentBody}
Timeout: ${formData.value.popupConfig.timeout}ms`);
};

allAvailableMethods.forEach(method => {
  if (formData.value.forceMethods[method.value] === undefined) {
    formData.value.forceMethods[method.value] = false;
  }
});

</script>

<style scoped>
.prose :where(p):where([class~="lead"]) {
  margin-top: 0;
  margin-bottom: 0;
}
.prose :where(p):first-child {
  margin-top: 0;
}
.prose :where(p):last-child {
  margin-bottom: 0;
}
</style>