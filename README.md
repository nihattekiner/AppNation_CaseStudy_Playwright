# 🤖 ChatbotAI - Playwright Automation Case Study

Bu proje, **ChatbotAI** web sitesinin temel fonksiyonlarını test etmek amacıyla **Playwright** ve **JavaScript** kullanılarak geliştirilmiş bir test otomasyon çalışmasıdır.

## 👨‍💻 Hazırlayan
**Kâzım Nihat Tekiner** *Software QA Engineer / SDET*

Bu çalışma, modern test otomasyon süreçlerini, **Page Object Model (POM)** mimarisini ve uçtan uca (E2E) test prensiplerini içermektedir.

---

🧪 Test Senaryoları (Neleri Test Ediyoruz?)
Bu proje kapsamında aşağıdaki 3 ana senaryo otomatize edilmiştir:

✅ Case 1: Chat Fonksiyonu ve Başlık Kontrolü
Web sitesine gidilir.

Sayfa başlığının (Title) doğruluğu kontrol edilir.

Chatbot'a bir mesaj yazılır ("bu bir otomasyon test denemesidir").

Botun yanıt verip vermediği kontrol edilir.

✅ Case 2: Login ve "Terms of Use" Sayfası
Ana sayfadan Login butonuna tıklanır.

Açılan pencerede Terms of Use (Kullanım Şartları) linkine tıklanır.

Kullanıcının doğru sayfaya yönlendirildiği doğrulanır.

✅ Case 3: Görsel Üretimi (Image Generation)
Sol menüden Image sekmesine geçilir.

Model listesinden DALL-E seçilir.

Chat'e "bana bir resim çiz" komutu gönderilir.

Üye girişi yapılmadığı için sistemin kullanıcıyı Login sayfasına yönlendirdiği doğrulanır.

🏗️ Proje Mimarisi
Dil: JavaScript / Node.js

Framework: Playwright

Tasarım Deseni: Page Object Model (POM)

Raporlama: Playwright HTML Reporter

## 🚀 Başlangıç Rehberi (Sıfırdan Kurulum)

Eğer daha önce bilgisayarınızda hiç kod yazmadıysanız veya test aracı çalıştırmadıysanız, aşağıdaki adımları sırasıyla uygulayarak bu projeyi çalıştırabilirsiniz.

### 1. Gereksinimler (Ön Hazırlık)
Projeyi çalıştırmadan önce bilgisayarınızda şu 3 temel aracın yüklü olması gerekir:

1.  **Node.js**: Bu projenin motorudur.
    * [Buraya tıklayarak indirin](https://nodejs.org/en) (LTS sürümünü seçin) ve "Next > Next" diyerek kurun.
2.  **VS Code**: Kodları görüntülemek ve çalıştırmak için kullanacağımız editör.
    * [Buraya tıklayarak indirin](https://code.visualstudio.com/) ve kurun.
3.  **Git**: Projeyi bilgisayarınıza indirmek için gereklidir.
    * [Buraya tıklayarak indirin](https://git-scm.com/downloads) ve kurun.

---

### 2. Projeyi Bilgisayarınıza İndirme

1.  Masaüstünde boş bir klasör açın.
2.  O klasörün içine girin, sağ tıklayıp **"Git Bash Here"** (veya terminal) seçeneğini seçin.
3.  Aşağıdaki komutu yapıştırıp Enter'a basın:
    ```bash
    git clone https://github.com/nihattekiner/AppNation_CaseStudy_Playwright.git
    ```
4.  İnen klasörü **VS Code** ile açın (`File > Open Folder` menüsünden).

---

### 3. Kurulum (Installation)

VS Code açıldıktan sonra üst menüden **Terminal > New Terminal** diyerek terminali açın ve sırasıyla şu iki komutu yazıp Enter'a basın. Bu komutlar gerekli kütüphaneleri ve tarayıcıları otomatik yükleyecektir.

```bash
npm install
```
(Bu işlem internet hızınıza göre 1-2 dakika sürebilir)

```bash
npx playwright install
```

(Test için gerekli sanal tarayıcıları indirir)


▶️ Testleri Çalıştırma
Kurulum bittikten sonra testleri çalıştırmak için VsCode içerisinde terminale şu komutu yazın:

1. Testleri İzleyerek Çalıştırma (Önerilen)
Tarayıcının açıldığını ve işlemlerin yapıldığını görmek için:
```bash
npx playwright test --headed
```

2. Raporu Görüntüleme
Testler bittiğinde detaylı HTML raporunu görmek için:
```bash
npx playwright show-report
```

Test senaryolarının başarılıyla çalıştığına dair video kayıtları : 
TS01 - https://drive.google.com/file/d/1YlSuZluSRqQE9uSYmZooLqoMvQrfwr56/view?usp=sharing
TS02 - https://drive.google.com/file/d/1mnNmNUC2BXhhIWOHWk7Cx23e-takUHr9/view?usp=sharing
TS03 - https://drive.google.com/file/d/1DATgWjIpvWs_8R69AgYqthGzi4pJYqVR/view?usp=sharing
