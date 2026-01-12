const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

  /* ---------- TEST SENARYOLARI ----------        
  Test Senaryosu 1: Chat Fonksiyonu ve Title Kontrolü
  1.1) https://chatbotai.com/ ana sayfasına gidilir. 
  1.2) Sayfa başlığının (Title) "Chatbotai.com - Chatbot AI, GPT-5.1, Gemini, DeepSeek, Grok" olduğu doğrulanır. 
  1.3) Chat input alanına "bu bir otomasyon test denemesidir" yazılır ve gönder butonuna basılır. 
  1.4) Botun yanıt ürettiği, yanıt balonunun (assistant-message-container) görünür olması ile doğrulanır.    
  
  Test Senaryosu 2: Login ve Terms Sayfası Navigasyonu
  2.1) https://chatbotai.com/ ana sayfasına gidilir. 
  2.2) Header bölümünde (sağ üstte) bulunan Login butonuna tıklanır. 
  2.3) Açılan Login/Sign-up penceresi içindeki "Terms of Use" linkine tıklanır. 
  2.4) Kullanıcının Terms sayfasına yönlendirildiği ve sayfa başlığının "Terms | Chatbotai.com" olduğu doğrulanır.

  Test Senaryosu 3: Image Generation (DALL-E) ve Login Redirect Kontrolü
  3.1) https://chatbotai.com/ ana sayfasına gidilir. 
  3.2) Sol taraftaki sidebar menüsünden "Image" sekmesine tıklanır. 
  3.3) Açılan model listesinden "DALL-E" modeli seçilir. 
  3.4) Chat alanına "bana bir resim çiz" prompt'u yazılır ve gönderilir. 
  3.5) Kullanıcıyı Login sayfasına yönlendirdiği için, sayfa başlığının "Login - Chatbotai.com" olduğu doğrulanır.
  */
  
  test('Case Study 1: Chat Fonksiyonu Kontrolü', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.verifyExactTitle("Chatbotai.com - Chatbot AI, GPT-5.1, Gemini, DeepSeek, Grok");
  await homePage.sendMessage("bu bir otomasyon test denemesidir");
  await homePage.verifyResponseReceived();
});

test('Case Study 2: Login ve Terms Sayfası Kontrolü', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  await homePage.clickLogin();
  await homePage.clickTermsLink();
  await homePage.verifyExactTitle("Terms | Chatbotai.com");
});

test('Case Study 3: Image Generation ve Login Redirect', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  // 1. Soldan Image menüsüne tıkla
  await homePage.clickImageSidebar();

  // 2. Listeden DALL-E seç
  await homePage.selectDalleModel();

  // 3. Chat'e istek gönder (Prompt yaz)
  // Not: sendMessage metodu hem yazar hem gönder butonuna basar.
  await homePage.sendMessage("bana bir resim çiz");

  // 4. Login sayfasına yönlendirildiğini Title ile doğrula
  // Beklenen title: Login - Chatbotai.com
  await homePage.verifyExactTitle("Login - Chatbotai.com");
});