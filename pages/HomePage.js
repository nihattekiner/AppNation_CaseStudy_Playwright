const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Chat mesajını yazdığımız metin kutusu
    this.chatInput = page.locator('#chat-input-textarea'); 
    
    // Mesajı göndermek için tıkladığımız ok butonu
    this.sendButton = page.locator('#chat-input-send-button');
    
    // Botun verdiği yanıtın çıktığı baloncuk.
    // .last() kullanmamızın sebebi: Sayfada birden fazla mesaj varsa en son geleni kontrol etmek.
    this.botResponse = page.locator('#assistant-message-container').last(); 

    // Header'da (sağ üstte) bulunan Login butonu.
    // :visible kullanma sebebimiz: Sayfada aynı ID'ye sahip gizli bir buton daha olması.
    this.loginButton = page.locator('#chat-header-login-button:visible');
    
    // Login penceresi açıldığında altta çıkan "Terms of Use" linki.
    this.termsLink = page.locator('a[href="/terms"]');

    // Sol taraftaki sidebar menüsündeki "Image" sekmesi
    this.imageSidebarButton = page.locator('#chat-sidebar-nav-item-button-Image');

    // Image sekmesine tıkladıktan sonra çıkan model listesindeki "DALL-E" kutucuğu.
    this.dalleOption = page.locator('#model-list-model-item').filter({ hasText: 'DALL-E' });
  }
  
  // --- ORTAK FONKSİYONLAR ---
  async navigate() {
    // Siteye git
    await this.page.goto('https://chatbotai.com/');
  }

  async verifyExactTitle(expectedTitle) {
    // Sayfa başlığının (Tab ismi) beklenen ile birebir aynı olduğunu doğrula
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  // --- CASE 1 FONKSİYONLARI ---
  async sendMessage(text) {
    // Yazıyı yaz ve gönder butonuna bas
    await this.chatInput.fill(text);
    await this.sendButton.click();
  }

  async verifyResponseReceived() {
    // Botun yanıt vermesini bekle (Max 15 saniye)
    await expect(this.botResponse).toBeVisible({ timeout: 15000 });
  }

  // --- CASE 2 FONKSİYONLARI ---
  async clickLogin() {
    await this.loginButton.click();
  }

  async clickTermsLink() {
    await this.termsLink.click();
  }

  // --- CASE 3 FONKSİYONLARI ---
  async clickImageSidebar() {
    await this.imageSidebarButton.click();
  }

  async selectDalleModel() {
    // DALL-E seçeneğine tıkla
    await this.dalleOption.click();
  }
};