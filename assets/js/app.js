/**
 * Tapadia City Centre (TCC) Mall - High-Performance Dual 3D Scroll & Multi-Language Engine
 * Light Luxury View • Simple Modern Fonts • English / Marathi / Hindi Support
 */

(function () {
  'use strict';

  // ==========================================================================
  // CONFIGURATION CONSTANTS
  // ==========================================================================
  const TOTAL_BUILDING_FRAMES = 300;
  const TOTAL_VEHICLE_FRAMES = 300;
  
  const BUILDING_PATH = (index) => `building_view_scrollable-jpg/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
  const VEHICLE_PATH = (index) => `brand_splash-jpg/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

  // ==========================================================================
  // MULTI-LANGUAGE (I18N) DICTIONARY: ENGLISH (DEFAULT), MARATHI, HINDI
  // ==========================================================================
  const I18N = {
    en: {
      nav_3d: "3D Vision",
      nav_about: "About TCC",
      nav_diwali: "🪔 Diwali Offers",
      nav_partners: "Partners",
      nav_shopping: "Shopping & Dining",
      nav_visit: "Plan Visit",
      nav_app: "Mobile App",
      nav_contact: "Leasing & Helpdesk",
      nav_call_leasing: "LEASING: +91 8111001200",
      
      status_checking: "● CHECKING OPERATING HOURS...",
      status_open: "● MALL OPEN NOW • 11:00 AM - 10:00 PM",
      status_smart: "● RELIANCE SMART OPEN • MALL OPENS AT 11 AM",
      status_cinema: "● MIRAJ CINEMAS LATE SHOWS ACTIVE",
      status_closed: "○ CLOSED FOR THE NIGHT • OPENS 7 AM / 11 AM",

      about_tag: "WESTERN VIDARBHA'S FIRST COMPLETE MODERN MALL",
      about_title: "TAPADIA CITY CENTRE (TCC) MALL",
      about_lead: "Tapadia City Centre (TCC) Mall is Amravati's premier shopping, dining, and entertainment destination, proudly serving as Western Vidarbha’s first complete modern mall. Opened in 2022, TCC brought a metro-city lifestyle experience directly to the heart of Amravati, making it a favorite hangout spot for families, youth, and shoppers from across the region.",
      about_sub: "Designed as a one-stop hub for the community, the mall perfectly balances retail, food, and fun under a single roof.",
      stat_brands: "National & Global Brands",
      stat_brands_sub: "Pantaloons, Trends, Adidas & More",
      stat_screens: "Miraj Cinemas Screens",
      stat_screens_sub: "State-of-the-Art Multiplex",
      stat_ac: "Central Air Conditioning",
      stat_ac_sub: "Full Wheelchair Accessibility",
      stat_year: "Grand Inception",
      stat_year_sub: "Gopal Nagar Sq, Badnera Rd",

      diwali_badge: "🪔 TCC GRAND DIWALI UTSAV & MEGA BUMPER PRIZE",
      diwali_title: "SHOP & WIN THIS FESTIVE VEHICLE!",
      diwali_sub: "Western Vidarbha's Biggest Festive Celebration! Shop for ₹2,500 or more at any of TCC Amravati’s 75+ brands to enter the Grand Diwali Lucky Draw and drive home this magnificent vehicle.",
      diwali_pill_tag: "DIWALI MEGA DHAMAKA 2026",
      diwali_pill_scroll: "SCROLL OR DRAG SLIDER TO ROTATE 360°",
      diwali_prize_title: "🏆 GRAND BUMPER LUCKY DRAW",
      diwali_prize_desc: "Shop ₹2,500+ across Pantaloons, Trends, Adidas & Food Court to get your VIP Raffle Coupon.",
      diwali_atrium: "LIVE DISPLAY AT TCC CENTRAL ATRIUM",
      diwali_p1_title: "Bumper Vehicle Prize",
      diwali_p1_desc: "One lucky winner drives home this luxury vehicle on the grand Diwali Dhanteras & Laxmi Pujan Draw.",
      diwali_p2_title: "Daily Gold Coins",
      diwali_p2_desc: "Hourly scratch cards and daily 24K gold coin winners every evening at the central mall atrium.",
      diwali_p3_title: "Up to 50% Festive Off",
      diwali_p3_desc: "Exclusive Diwali discounts across 75+ anchor fashion stores, ethnic wear, and electronics.",
      diwali_p4_title: "Festive Entertainment",
      diwali_p4_desc: "Diwali blockbuster premieres at 4-screen Miraj Cinemas and family VR games at Masti Zone.",

      partners_tag: "OFFICIAL BRAND PARTNERS",
      partners_title: "OVER 75+ ICONIC NATIONAL & GLOBAL BRANDS",
      partners_desc: "TCC Amravati brings together the world's most cherished fashion, lifestyle, dining, and entertainment labels under Western Vidarbha's grandest roof.",

      high_tag: "MALL HIGHLIGHTS",
      high_title: "🛍️ WHAT YOU'LL FIND AT TCC AMRAVATI",
      high_desc: "A magnificent symphony of fashion, culinary excellence, and exhilarating family entertainment engineered for unforgettable memories.",
      high_shop_title: "Top-Tier Shopping",
      high_shop_desc: "Home to over 75 favorite national and international brands. Explore flagship anchor stores like Pantaloons, Reliance Trends, Adidas, and Skechers, alongside curated collections of apparel, jewelry, footwear, and cosmetics.",
      high_dine_title: "Delicious Dining",
      high_dine_desc: "A massive multi-cuisine food court and popular restaurants offering culinary wonders from around the globe. Indulge in feasts at Barbeque Nation, KFC, Pizza Hut, Burger King, artisanal cafes, and regional specialties.",
      high_ent_title: "Non-Stop Entertainment",
      high_ent_desc: "Western Vidarbha's epicenter of adrenaline and cinema! A state-of-the-art 4-screen Miraj Cinemas multiplex alongside the vibrant Masti Zone family gaming arena featuring professional bowling, bumper cars, and virtual reality games.",

      visit_tag: "VISITOR GUIDE",
      visit_title: "📍 PLAN YOUR VISIT",
      visit_desc: "Everything you need to know for a seamless, comfortable, and memorable outing at Tapadia City Centre Mall.",
      visit_loc_title: "Mall Location",
      visit_loc_desc: "Gopal Nagar Square, Badnera Road, Saturna, Amravati, Maharashtra 444607.",
      visit_time_title: "Operating Timings",
      visit_time_desc: "11:00 AM to 10:00 PM daily across all retail, food court, and entertainment zones.",
      visit_time_note: "🛒 RELIANCE SMART OPENS EARLY: 7:00 AM • CINEMA SHOWS RUN LATE",
      visit_about_title: "About Tapadia City Centre",
      visit_about_desc: "Proudly serving as Western Vidarbha’s first complete modern mall since 2022. TCC brought a metro-city lifestyle experience directly to the heart of Amravati, making it a favorite hangout spot for families, youth, and shoppers from across the region.",
      fac_title: "WORLD-CLASS FACILITIES",
      fac_1: "Multi-Level Basement Parking",
      fac_2: "Central Air Conditioning",
      fac_3: "Clean Family Rooms",
      fac_4: "Full Wheelchair Accessibility",
      fac_5: "High-Speed Guest Wi-Fi",
      fac_6: "EV Fast Charging Stations",
      btn_maps: "OPEN IN GOOGLE MAPS ›",

      app_tag: "SMART COMPANION APP",
      app_title: "EXPERIENCE TCC MALL ON YOUR SMARTPHONE",
      app_desc: "Download the official Tapadia City Centre App to unlock instant cinema booking, contactless food court ordering, automated parking navigation, and exclusive brand discount vouchers.",
      app_p1: "Real-Time Parking Slot Finder",
      app_p2: "Miraj Cinemas Ticket Booking",
      app_p3: "Digital Food Court Order & Pay",
      app_p4: "VIP Brand Discounts & Flash Deals",
      app_scan: "SCAN QR CODE FOR FAST DOWNLOAD",

      contact_tag: "COMMUNICATION DESK",
      contact_title: "CONNECT WITH TAPADIA CITY CENTRE",
      contact_desc: "For retail brand leasing queries, kiosk allocations, event partnerships, or customer assistance, our management team is ready to assist.",
      c_leasing_title: "Leasing & Retail Queries",
      c_helpdesk_title: "Customer Helpdesk",
      c_whatsapp_title: "Official WhatsApp Desk",
      c_rate_title: "Amravati's #1 Rated Mall",
      c_btn_call: "CALL NOW",
      c_btn_chat: "CHAT",
      c_btn_rate: "RATE US",
      form_title: "TRANSMIT DIRECT INQUIRY",
      form_desc: "Send your brand proposal, store leasing query, or event request directly to TCC management.",
      form_name: "Your Full Name / Company",
      form_phone: "Contact Mobile Number",
      form_type: "Inquiry Classification",
      form_msg: "Detailed Requirement",
      form_btn: "TRANSMIT INQUIRY TO MANAGEMENT",

      fab_rate: "Rate Us",
      fab_whatsapp: "WhatsApp",
      fab_contact: "Contact"
    },

    mr: {
      nav_3d: "३D व्हिजन",
      nav_about: "टीसीसी बद्दल",
      nav_diwali: "🪔 दिवाळी ऑफर्स",
      nav_partners: "भागीदार",
      nav_shopping: "खरेदी आणि खाद्य",
      nav_visit: "भेट योजना",
      nav_app: "मोबाईल ॲप",
      nav_contact: "लीजिंग आणि हेल्पडेस्क",
      nav_call_leasing: "लीजिंग: +९१ ८१११००१२००",

      status_checking: "● मॉलची वेळ तपासत आहे...",
      status_open: "● मॉल आता सुरू आहे • सकाळी ११:०० ते रात्री १०:००",
      status_smart: "● रिलायन्स स्मार्ट सुरू • मॉल सकाळी ११ वाजता उघडेल",
      status_cinema: "● मिराज सिनेमाज नाईट शो सुरू आहेत",
      status_closed: "○ मॉल रात्री बंद आहे • सकाळी ७ / ११ वाजता उघडेल",

      about_tag: "पश्चिम विदर्भातील पहिला संपूर्ण आधुनिक मॉल",
      about_title: "तापडिया सिटी सेंटर (टीसीसी) मॉल",
      about_lead: "तापडिया सिटी सेंटर (टीसीसी) मॉल हे अमरावतीचे प्रमुख खरेदी, जेवण आणि मनोरंजनाचे केंद्र आहे, जे २०२२ पासून पश्चिम विदर्भातील पहिला आधुनिक मॉल म्हणून अभिमानाने कार्यरत आहे. टीसीसीने अमरावतीच्या केंद्रस्थानी थेट मेट्रो शहराचा जीवनशैली अनुभव आणला, ज्यामुळे तो संपूर्ण प्रदेशातील कुटुंबे, तरुण आणि खरेदीदारांचे आवडते ठिकाण बनला आहे.",
      about_sub: "समाजासाठी वन-स्टॉप हब म्हणून डिझाइन केलेला हा मॉल एकाच छताखाली खरेदी, खाद्यपदार्थ आणि मनोरंजनाचा परिपूर्ण समतोल साधतो.",
      stat_brands: "राष्ट्रीय आणि जागतिक ब्रँड्स",
      stat_brands_sub: "पँटालून्स, ट्रेंड्स, एडिडास आणि बरेच काही",
      stat_screens: "मिराज सिनेमाज स्क्रीन्स",
      stat_screens_sub: "अत्याधुनिक ४-स्क्रीन मल्टिप्लेक्स",
      stat_ac: "सेंट्रल एअर कंडिशनिंग",
      stat_ac_sub: "व्हीलचेअर आणि कौटुंबिक सुविधा",
      stat_year: "भव्य स्थापना",
      stat_year_sub: "गोपाल नगर चौक, बडनेरा रोड",

      diwali_badge: "🪔 टीसीसी महा दिवाळी उत्सव आणि बंपर लकी ड्रॉ",
      diwali_title: "खरेदी करा आणि जिंका हे भव्य वाहन!",
      diwali_sub: "पश्चिम विदर्भातील सर्वात मोठा सणासुदीचा उत्सव! टीसीसी अमरावतीमधील ७५+ ब्रँड्समधून ₹२,५०० किंवा अधिक खरेदी करा आणि हे आकर्षक वाहन जिंकण्याची सुवर्णसंधी मिळवा.",
      diwali_pill_tag: "दिवाळी महा धमाका २०२६",
      diwali_pill_scroll: "वाहन ३६०° फिरवण्यासाठी स्क्रोल किंवा स्लायडर वापरा",
      diwali_prize_title: "🏆 महा बंपर लकी ड्रॉ",
      diwali_prize_desc: "पँटालून्स, ट्रेंड्स, एडिडास आणि फूड कोर्टमधून ₹२,५००+ खरेदी करून व्हीआयपी कूपन मिळवा.",
      diwali_atrium: "टीसीसी मध्यवर्ती दालनात थेट प्रदर्शन",
      diwali_p1_title: "बंपर वाहन पारितोषिक",
      diwali_p1_desc: "धनत्रयोदशी आणि लक्ष्मीपूजन महा सोडतीत एका भाग्यवान विजेत्याला हे भव्य वाहन मिळेल.",
      diwali_p2_title: "दैनिक सोन्याचे नाणे",
      diwali_p2_desc: "दर तासाला स्क्रॅच कार्ड्स आणि दररोज संध्याकाळी २४ कॅरेट सोन्याचे नाणे जिंकण्याची संधी.",
      diwali_p3_title: "सणासुदीवर ५०% पर्यंत सूट",
      diwali_p3_desc: "सर्व ७५+ आघाडीच्या फॅशन, एथनिक वेअर आणि इलेक्ट्रॉनिक्स ब्रँड्सवर विशेष दिवाळी सवलत.",
      diwali_p4_title: "उत्सव मनोरंजन",
      diwali_p4_desc: "मिराज सिनेमाजमध्ये दिवाळी ब्लॉकबस्टर चित्रपट आणि मस्ती झोनमध्ये कौटुंबिक व्हीआर खेळ.",

      partners_tag: "अधिकृत ब्रँड भागीदार",
      partners_title: "७५+ हून अधिक राष्ट्रीय आणि जागतिक ब्रँड्स",
      partners_desc: "टीसीसी अमरावती पश्चिम विदर्भाच्या सर्वात मोठ्या छताखाली जगातील सर्वात आवडते फॅशन, जेवण आणि मनोरंजन ब्रँड्स एकत्र आणते.",

      high_tag: "मॉलची प्रमुख वैशिष्ट्ये",
      high_title: "🛍️ टीसीसी अमरावतीमध्ये काय मिळेल",
      high_desc: "अविस्मरणीय आठवणींसाठी डिझाइन केलेले फॅशन, उत्तम जेवण आणि थरारक कौटुंबिक मनोरंजनाचे सुंदर केंद्र.",
      high_shop_title: "दर्जेदार खरेदी",
      high_shop_desc: "७५ हून अधिक आघाडीच्या राष्ट्रीय आणि आंतरराष्ट्रीय ब्रँड्सचे घर. पँटालून्स, रिलायन्स ट्रेंड्स, एडिडास, स्केचर्स यांसारख्या फ्लॅगशिप स्टोअर्सची विस्तृत श्रेणी.",
      high_dine_title: "चविष्ट जेवण",
      high_dine_desc: "भव्य मल्टी-क्युझिन फूड कोर्ट आणि प्रसिद्ध रेस्टॉरंट्स. बारबेक्यू नेशन, केएफसी, पिझ्झा हट, बर्गर किंग आणि स्थानिक स्वादिष्ट पदार्थांचा आस्वाद घ्या.",
      high_ent_title: "अखंड मनोरंजन",
      high_ent_desc: "पश्चिम विदर्भातील मनोरंजनाचे केंद्र! अत्याधुनिक ४-स्क्रीन मिराज सिनेमाज मल्टिप्लेक्स, मस्ती झोन बॉलिंग, बंपर कार आणि व्हर्च्युअल रिॲलिटी गेम्स.",

      visit_tag: "भेट मार्गदर्शक",
      visit_title: "📍 आपल्या भेटीचे नियोजन करा",
      visit_desc: "टीसीसी मॉलमध्ये आपल्या कुटुंबासह सोयीस्कर आणि आनंददायी सहलीसाठी सर्व आवश्यक माहिती.",
      visit_loc_title: "मॉलचे ठिकाण",
      visit_loc_desc: "गोपाल नगर चौक, बडनेरा रोड, सातूर्णा, अमरावती, महाराष्ट्र ४४४६०७.",
      visit_time_title: "मॉलची वेळ",
      visit_time_desc: "दररोज सकाळी ११:०० ते रात्री १०:०० पर्यंत सर्व रिटेल, फूड कोर्ट आणि मनोरंजन सुरू असते.",
      visit_time_note: "🛒 रिलायन्स स्मार्ट सकाळी ७:०० वाजता सुरू होते • सिनेमा शो रात्री उशिरापर्यंत सुरू असतात",
      visit_about_title: "टीसीसी बद्दल माहिती",
      visit_about_desc: "२०२२ पासून पश्चिम विदर्भातील पहिला संपूर्ण आधुनिक मॉल म्हणून अभिमानाने कार्यरत. संपूर्ण विदर्भातील ग्राहकांचे हे सर्वात आवडते ठिकाण आहे.",
      fac_title: "जागतिक दर्जाच्या सुविधा",
      fac_1: "मल्टी-लेव्हल बेसमेंट पार्किंग",
      fac_2: "सेंट्रल एअर कंडिशनिंग",
      fac_3: "स्वच्छ फॅमिली रूम्स",
      fac_4: "पूर्ण व्हीलचेअर सुलभता",
      fac_5: "हाय-स्पीड वाय-फाय सुविधा",
      fac_6: "ईव्ही फास्ट चार्जिंग स्टेशन",
      btn_maps: "गुगल मॅप्सवर उघडा ›",

      app_tag: "स्मार्ट मोबाईल ॲप",
      app_title: "आपल्या स्मार्टफोनवर टीसीसी मॉलचा अनुभव घ्या",
      app_desc: "तिकीट बुकिंग, कॉन्टॅक्टलेस फूड ऑर्डरिंग आणि पार्किंग नेव्हिगेशनसाठी अधिकृत टीसीसी ॲप डाउनलोड करा.",
      app_p1: "रिअल-टाइम पार्किंग स्लॉट शोधक",
      app_p2: "मिराज सिनेमाज तिकीट बुकिंग",
      app_p3: "डिजिटल फूड कोर्ट ऑर्डर आणि पे",
      app_p4: "व्हीआयपी ब्रँड डिस्काउंट आणि ऑफर्स",
      app_scan: "जलद डाउनलोडसाठी क्यूआर कोड स्कॅन करा",

      contact_tag: "संपर्क कक्ष",
      contact_title: "टीसीसी व्यवस्थापनाशी संपर्क साधा",
      contact_desc: "स्टोअर लीजिंग, किऑस्क जागा, मॉल इव्हेंट किंवा ग्राहक सेवेसाठी आमची टीम सदैव सज्ज आहे.",
      c_leasing_title: "स्टोअर आणि रिटेल लीजिंग",
      c_helpdesk_title: "ग्राहक हेल्पडेस्क",
      c_whatsapp_title: "अधिकृत व्हॉट्सॲप कक्ष",
      c_rate_title: "अमरावतीचा #१ रेटेड मॉल",
      c_btn_call: "कॉल करा",
      c_btn_chat: "चॅट करा",
      c_btn_rate: "रेट करा",
      form_title: "थेट चौकशी पाठवा",
      form_desc: "आपला ब्रँड प्रस्ताव किंवा लीजिंग चौकशी थेट टीसीसी व्यवस्थापनाला पाठवा.",
      form_name: "आपले पूर्ण नाव / कंपनी",
      form_phone: "मोबाईल क्रमांक",
      form_type: "चौकशीचा प्रकार",
      form_msg: "तपशीलवार आवश्यकता",
      form_btn: "व्यवस्थापनाकडे पाठवा",

      fab_rate: "रेट करा",
      fab_whatsapp: "व्हॉट्सॲप",
      fab_contact: "संपर्क"
    },

    hi: {
      nav_3d: "३D विजन",
      nav_about: "टीसीसी के बारे में",
      nav_diwali: "🪔 दिवाली ऑफर्स",
      nav_partners: "पार्टनर्स",
      nav_shopping: "शॉपिंग एवं डाइनिंग",
      nav_visit: "विज़िट प्लान",
      nav_app: "मोबाइल ऐप",
      nav_contact: "लीजिंग एवं हेल्पडेस्क",
      nav_call_leasing: "लीजिंग: +91 8111001200",

      status_checking: "● मॉल का समय चेक हो रहा है...",
      status_open: "● मॉल अभी खुला है • सुबह 11:00 से रात 10:00",
      status_smart: "● रिलायंस स्मार्ट खुला है • मॉल सुबह 11 बजे खुलेगा",
      status_cinema: "● मिराज सिनेमाज नाइट शो सक्रिय हैं",
      status_closed: "○ रात के लिए मॉल बंद है • सुबह 7 / 11 बजे खुलेगा",

      about_tag: "पश्चिम विदर्भ का पहला संपूर्ण आधुनिक मॉल",
      about_title: "तापड़िया सिटी सेंटर (टीसीसी) मॉल",
      about_lead: "तापड़िया सिटी सेंटर (टीसीसी) मॉल अमरावती का प्रमुख शॉपिंग, डाइनिंग और मनोरंजन स्थल है, जो 2022 से पश्चिम विदर्भ के पहले आधुनिक मॉल के रूप में सेवाएं दे रहा है। टीसीसी ने अमरावती के केंद्र में मेट्रो सिटी लाइफस्टाइल का अनुभव लाया, जिससे यह परिवारों, युवाओं और खरीदारों का पसंदीदा स्थान बन गया है।",
      about_sub: "समुदाय के लिए वन-स्टॉप हब के रूप में डिज़ाइन किया गया यह मॉल एक ही छत के नीचे खरीदारी, खान-पान और मनोरंजन का बेहतरीन संतुलन बनाता है।",
      stat_brands: "राष्ट्रीय एवं ग्लोबल ब्रांड्स",
      stat_brands_sub: "पेंटालून्स, ट्रेंड्स, एडिडास आदि",
      stat_screens: "मिराज सिनेमाज स्क्रीन्स",
      stat_screens_sub: "अत्याधुनिक 4-स्क्रीन मल्टीप्लेक्स",
      stat_ac: "सेंट्रल एयर कंडीशनिंग",
      stat_ac_sub: "पूर्ण व्हीलचेयर सुलभता",
      stat_year: "भव्य स्थापना",
      stat_year_sub: "गोपाल नगर स्क्वायर, बडनेरा रोड",

      diwali_badge: "🪔 टीसीसी भव्य दिवाली उत्सव एवं बंपर लकी ड्रा",
      diwali_title: "खरीदारी करें और जीतें यह भव्य वाहन!",
      diwali_sub: "पश्चिम विदर्भ का सबसे बड़ा उत्सव! टीसीसी अमरावती के 75+ ब्रांड्स से ₹2,500 या अधिक की खरीदारी करें और यह भव्य वाहन घर ले जाने का सुनहरा मौका पाएं।",
      diwali_pill_tag: "दिवाली महा धमाका 2026",
      diwali_pill_scroll: "गाड़ी को 360° घुमाने के लिए स्क्रॉल या स्लाइडर का उपयोग करें",
      diwali_prize_title: "🏆 महा बंपर लकी ड्रा",
      diwali_prize_desc: "पेंटालून्स, ट्रेंड्स, एडिडास और फूड कोर्ट से ₹2,500+ की खरीदारी पर वीआईपी कूपन पाएं।",
      diwali_atrium: "टीसीसी सेंट्रल एट्रियम में लाइव डिस्प्ले",
      diwali_p1_title: "बंपर वाहन पुरस्कार",
      diwali_p1_desc: "धनतेरस और लक्ष्मी पूजन महा ड्रा में एक भाग्यशाली विजेता को यह शानदार गाड़ी मिलेगी।",
      diwali_p2_title: "दैनिक सोने के सिक्के",
      diwali_p2_desc: "हर घंटे स्क्रैच कार्ड और रोज़ाना शाम को 24K सोने का सिक्का जीतने का मौका।",
      diwali_p3_title: "त्योहारों पर 50% तक छूट",
      diwali_p3_desc: "सभी 75+ प्रमुख फैशन, एथनिक वियर और इलेक्ट्रॉनिक्स ब्रांड्स पर विशेष दिवाली छूट।",
      diwali_p4_title: "उत्सव मनोरंजन",
      diwali_p4_desc: "मिराज सिनेमाज में दिवाली ब्लॉकबस्टर फिल्में और मस्ती ज़ोन में फैमिली वीआर गेम्स।",

      partners_tag: "आधिकारिक ब्रांड पार्टनर्स",
      partners_title: "75+ से अधिक प्रमुख राष्ट्रीय एवं ग्लोबल ब्रांड्स",
      partners_desc: "टीसीसी अमरावती पश्चिम विदर्भ की सबसे भव्य छत के नीचे दुनिया के सबसे पसंदीदा फैशन, डाइनिंग और मनोरंजन ब्रांड्स को एक साथ लाता है।",

      high_tag: "मॉल की प्रमुख विशेषताएं",
      high_title: "🛍️ टीसीसी अमरावती में क्या मिलेगा",
      high_desc: "यादगार पलों के लिए निर्मित फैशन, स्वादिष्ट खान-पान और रोमांचक मनोरंजन का संगम।",
      high_shop_title: "टॉप-टियर शॉपिंग",
      high_shop_desc: "75 से अधिक राष्ट्रीय और अंतरराष्ट्रीय ब्रांड्स। पेंटालून्स, रिलायंस ट्रेंड्स, एडिडास, स्केचर्स जैसे प्रमुख स्टोर्स की पूरी श्रृंखला।",
      high_dine_title: "स्वादिष्ट डाइनिंग",
      high_dine_desc: "विशाल मल्टी-कुज़ी़न फूड कोर्ट और लोकप्रिय रेस्टोरेंट्स। बारबेक्यू नेशन, केएफसी, पिज़्ज़ा हट, बर्गर किंग और लज़ीज़ व्यंजनों का आनंद लें।",
      high_ent_title: "नॉन-स्टॉप मनोरंजन",
      high_ent_desc: "पश्चिम विदर्भ का मनोरंजन केंद्र! 4-स्क्रीन मिराज सिनेमाज मल्टीप्लेक्स, मस्ती ज़ोन बॉलिंग, बंपर कार्स और वर्चुअल Reality गेम्स।",

      visit_tag: "विज़िटर गाइड",
      visit_title: "📍 अपनी यात्रा की योजना बनाएं",
      visit_desc: "टीसीसी मॉल में अपने परिवार के साथ आरामदायक और सुखद अनुभव के लिए आवश्यक जानकारी।",
      visit_loc_title: "मॉल का स्थान",
      visit_loc_desc: "गोपाल नगर स्क्वायर, बडनेरा रोड, सातूर्णा, अमरावती, महाराष्ट्र 444607.",
      visit_time_title: "मॉल का समय",
      visit_time_desc: "रोज़ाना सुबह 11:00 से रात 10:00 तक सभी रिटेल, फूड कोर्ट और मनोरंजन क्षेत्र खुले रहते हैं।",
      visit_time_note: "🛒 रिलायंस स्मार्ट सुबह 7:00 बजे खुलता है • सिनेमा शो देर रात तक चलते हैं",
      visit_about_title: "टीसीसी के बारे में",
      visit_about_desc: "2022 से पश्चिम विदर्भ के पहले आधुनिक मॉल के रूप में सेवारत। पूरे क्षेत्र के परिवारों और युवाओं का सबसे पसंदीदा स्थल।",
      fac_title: "विश्वस्तरीय सुविधाएं",
      fac_1: "मल्टी-लेवल बेसमेंट पार्किंग",
      fac_2: "सेंट्रल एयर कंडीशनिंग",
      fac_3: "साफ फैमिली रूम्स",
      fac_4: "पूर्ण व्हीलचेयर सुलभता",
      fac_5: "हाई-स्पीड वाई-फाई सुविधा",
      fac_6: "ईवी फास्ट चार्जिंग स्टेशन",
      btn_maps: "गूगल मैप्स पर देखें ›",

      app_tag: "स्मार्ट मोबाइल ऐप",
      app_title: "अपने स्मार्टफोन पर टीसीसी मॉल का अनुभव करें",
      app_desc: "टिकट बुकिंग, फूड कोर्ट ऑर्डरिंग और पार्किंग नेविगेशन के लिए आधिकारिक टीसीसी ऐप डाउनलोड करें।",
      app_p1: "रियल-टाइम पार्किंग स्लॉट खोजें",
      app_p2: "मिराज सिनेमाज टिकट बुकिंग",
      app_p3: "डिजिटल फूड कोर्ट ऑर्डर एवं भुगतान",
      app_p4: "वीआईपी ब्रांड डिस्काउंट एवं डील्स",
      app_scan: "फास्ट डाउनलोड के लिए क्यूआर कोड स्कैन करें",

      contact_tag: "संपर्क केंद्र",
      contact_title: "टीसीसी प्रबंधन से संपर्क करें",
      contact_desc: "स्टोर लीजिंग, कियोस्क स्पेस, मॉल इवेंट्स या कस्टमर सहायता के लिए हमारी टीम सदैव तत्पर है।",
      c_leasing_title: "स्टोर एवं रिटेल लीजिंग",
      c_helpdesk_title: "कस्टमर हेल्पडेस्क",
      c_whatsapp_title: "आधिकारिक व्हाट्सएप डेस्क",
      c_rate_title: "अमरावती का #1 रेटेड मॉल",
      c_btn_call: "कॉल करें",
      c_btn_chat: "चैट करें",
      c_btn_rate: "रेट करें",
      form_title: "सीधी पूछताछ भेजें",
      form_desc: "अपना ब्रांड प्रस्ताव या लीजिंग संबंधी पूछताछ सीधे टीसीसी प्रबंधन को भेजें।",
      form_name: "आपका पूरा नाम / कंपनी",
      form_phone: "मोबाइल नंबर",
      form_type: "पूछताछ का प्रकार",
      form_msg: "विस्तृत आवश्यकता",
      form_btn: "प्रबंधन को भेजें",

      fab_rate: "रेट करें",
      fab_whatsapp: "व्हाट्सएप",
      fab_contact: "संपर्क"
    }
  };

  let currentLang = localStorage.getItem('tcc_lang') || 'en';

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('tcc_lang', lang);

    // Update active lang button in UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update HTML text nodes
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholder attributes if any
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    updateMallOperatingStatus();
  }

  // ==========================================================================
  // WEB AUDIO SYNTHESIZER
  // ==========================================================================
  let audioCtx = null;
  let audioEnabled = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playUiBeep(freq = 880, type = 'sine', duration = 0.08, vol = 0.04) {
    if (!audioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(vol, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Audio Toggle UI Handler
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      initAudio();
      audioEnabled = !audioEnabled;
      audioToggleBtn.classList.toggle('active', audioEnabled);
      audioToggleBtn.innerHTML = audioEnabled
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
      if (audioEnabled) playUiBeep(1200, 'sine', 0.12, 0.08);
    });
  }

  document.querySelectorAll('button, a, .fab-btn').forEach((elem) => {
    elem.addEventListener('mouseenter', () => playUiBeep(440, 'sine', 0.04, 0.02));
    elem.addEventListener('click', () => playUiBeep(880, 'triangle', 0.05, 0.04));
  });

  // ==========================================================================
  // 1. TOP 3D BUILDING VIEW SCROLL CONTROLLER (CLEAN PURE FRAME SCRUBBING)
  // ==========================================================================
  const heroWrapper = document.getElementById('heroScrollWrapper');
  const buildingCanvas = document.getElementById('building-canvas');
  const buildingCtx = buildingCanvas ? buildingCanvas.getContext('2d', { alpha: false }) : null;

  const buildingImages = new Array(TOTAL_BUILDING_FRAMES);
  let buildingTargetFrame = 1;
  let buildingCurrentFrame = 1;

  function renderBuildingFrame(frameIndex) {
    if (!buildingCtx || !buildingCanvas) return;
    const clamped = Math.max(1, Math.min(TOTAL_BUILDING_FRAMES, Math.round(frameIndex)));
    const img = buildingImages[clamped - 1];

    if (img && img.complete && img.naturalWidth > 0) {
      drawCoverImage(buildingCtx, buildingCanvas, img);
    } else {
      for (let offset = 1; offset < 20; offset++) {
        const prev = buildingImages[clamped - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          drawCoverImage(buildingCtx, buildingCanvas, prev);
          break;
        }
        const next = buildingImages[clamped - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          drawCoverImage(buildingCtx, buildingCanvas, next);
          break;
        }
      }
    }
  }

  function initBuildingLoader() {
    if (!buildingCanvas) return;
    setCanvasHiDPI(buildingCanvas, buildingCtx);

    const firstImg = new Image();
    firstImg.src = BUILDING_PATH(1);
    firstImg.onload = () => {
      renderBuildingFrame(1);
    };
    buildingImages[0] = firstImg;

    for (let i = 2; i <= TOTAL_BUILDING_FRAMES; i++) {
      const img = new Image();
      img.src = BUILDING_PATH(i);
      buildingImages[i - 1] = img;
    }
  }

  // ==========================================================================
  // 2. DIWALI OFFER VEHICLE 3D SCROLL & INTERACTIVE ROTATION CONTROLLER
  // ==========================================================================
  const vehicleWrapper = document.getElementById('vehicleScrollSection');
  const vehicleCanvas = document.getElementById('vehicle-canvas');
  const vehicleCtx = vehicleCanvas ? vehicleCanvas.getContext('2d', { alpha: false }) : null;
  const vehicleSlider = document.getElementById('vehicleSlider');
  const btnRotateLeft = document.getElementById('btnRotateLeft');
  const btnRotateRight = document.getElementById('btnRotateRight');
  const btnAutoSpin = document.getElementById('btnAutoSpin');

  const vehicleImages = new Array(TOTAL_VEHICLE_FRAMES);
  let vehicleTargetFrame = 1;
  let vehicleCurrentFrame = 1;
  let isAutoSpinning = false;

  function renderVehicleFrame(frameIndex) {
    if (!vehicleCtx || !vehicleCanvas) return;
    const clamped = Math.max(1, Math.min(TOTAL_VEHICLE_FRAMES, Math.round(frameIndex)));
    const img = vehicleImages[clamped - 1];

    if (img && img.complete && img.naturalWidth > 0) {
      drawCoverImage(vehicleCtx, vehicleCanvas, img);
    } else {
      for (let offset = 1; offset < 20; offset++) {
        const prev = vehicleImages[clamped - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          drawCoverImage(vehicleCtx, vehicleCanvas, prev);
          break;
        }
        const next = vehicleImages[clamped - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          drawCoverImage(vehicleCtx, vehicleCanvas, next);
          break;
        }
      }
    }

    if (vehicleSlider && document.activeElement !== vehicleSlider) {
      vehicleSlider.value = clamped;
    }
  }

  function initVehicleLoader() {
    if (!vehicleCanvas) return;
    setCanvasHiDPI(vehicleCanvas, vehicleCtx);

    const firstImg = new Image();
    firstImg.src = VEHICLE_PATH(1);
    firstImg.onload = () => {
      renderVehicleFrame(1);
    };
    vehicleImages[0] = firstImg;

    for (let i = 2; i <= TOTAL_VEHICLE_FRAMES; i++) {
      const img = new Image();
      img.src = VEHICLE_PATH(i);
      vehicleImages[i - 1] = img;
    }

    // Interactive Slider Handler
    if (vehicleSlider) {
      vehicleSlider.addEventListener('input', (e) => {
        isAutoSpinning = false;
        vehicleTargetFrame = parseInt(e.target.value, 10);
      });
    }

    // Manual Buttons
    if (btnRotateLeft) {
      btnRotateLeft.addEventListener('click', () => {
        isAutoSpinning = false;
        vehicleTargetFrame = (vehicleTargetFrame - 15 + TOTAL_VEHICLE_FRAMES - 1) % TOTAL_VEHICLE_FRAMES + 1;
      });
    }

    if (btnRotateRight) {
      btnRotateRight.addEventListener('click', () => {
        isAutoSpinning = false;
        vehicleTargetFrame = (vehicleTargetFrame + 15 - 1) % TOTAL_VEHICLE_FRAMES + 1;
      });
    }

    if (btnAutoSpin) {
      btnAutoSpin.addEventListener('click', () => {
        isAutoSpinning = !isAutoSpinning;
        btnAutoSpin.classList.toggle('active', isAutoSpinning);
        btnAutoSpin.textContent = isAutoSpinning ? '⏸ Pause Spin' : '▶ Auto Spin 360°';
      });
    }
  }

  // ==========================================================================
  // SHARED HIGH-FPS ANIMATION LOOP
  // ==========================================================================
  function globalAnimationLoop() {
    // 1. Building Lerp
    const bDiff = buildingTargetFrame - buildingCurrentFrame;
    if (Math.abs(bDiff) > 0.05) {
      buildingCurrentFrame += bDiff * 0.16;
      renderBuildingFrame(buildingCurrentFrame);
    }

    // 2. Vehicle Lerp or Auto-Spin
    if (isAutoSpinning) {
      vehicleTargetFrame = (vehicleTargetFrame % TOTAL_VEHICLE_FRAMES) + 1;
    }

    const vDiff = vehicleTargetFrame - vehicleCurrentFrame;
    if (Math.abs(vDiff) > 0.05) {
      vehicleCurrentFrame += vDiff * 0.16;
      renderVehicleFrame(vehicleCurrentFrame);
    }

    requestAnimationFrame(globalAnimationLoop);
  }

  function onScroll() {
    // 1. Building Scroll Progress
    if (heroWrapper) {
      const rect = heroWrapper.getBoundingClientRect();
      const totalScrollable = heroWrapper.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      buildingTargetFrame = Math.max(1, Math.min(TOTAL_BUILDING_FRAMES, Math.round(progress * (TOTAL_BUILDING_FRAMES - 1)) + 1));
    }

    // 2. Vehicle Scroll Progress (Diwali Section)
    if (vehicleWrapper && !isAutoSpinning) {
      const vRect = vehicleWrapper.getBoundingClientRect();
      const vTotalScrollable = vehicleWrapper.offsetHeight - window.innerHeight;
      const vScrolled = -vRect.top;
      if (vScrolled >= 0 && vScrolled <= vTotalScrollable) {
        const vProgress = Math.max(0, Math.min(1, vScrolled / vTotalScrollable));
        vehicleTargetFrame = Math.max(1, Math.min(TOTAL_VEHICLE_FRAMES, Math.round(vProgress * (TOTAL_VEHICLE_FRAMES - 1)) + 1));
      }
    }

    // 3. Navbar scroll style
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  // ==========================================================================
  // UTILITY: CANVAS HI-DPI & ASPECT COVER MATH
  // ==========================================================================
  function setCanvasHiDPI(canvas, ctx) {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  function drawCoverImage(ctx, canvas, img) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvasW = canvas.width / dpr;
    const canvasH = canvas.height / dpr;
    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;

    const canvasRatio = canvasW / canvasH;
    const imgRatio = imgW / imgH;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = canvasW;
      renderH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - renderH) / 2;
    } else {
      renderH = canvasH;
      renderW = canvasH * imgRatio;
      offsetX = (canvasW - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }

  // ==========================================================================
  // 3. ONE-BY-ONE SMOOTH SCROLL REVEAL OBSERVER
  // ==========================================================================
  function initScrollRevealObserver() {
    document.querySelectorAll('.partners-section .col-6, .partners-section .col-sm-4, .partners-section [class*="col-"]').forEach((col, idx) => {
      col.classList.add('reveal-on-scroll');
      col.style.transitionDelay = `${(idx % 6) * 0.06}s`;
    });

    document.querySelectorAll('.features-grid .feature-card').forEach((card, idx) => {
      card.classList.add('reveal-on-scroll');
      card.style.transitionDelay = `${idx * 0.12}s`;
    });

    document.querySelectorAll('.facilities-cards .fac-item').forEach((item, idx) => {
      item.classList.add('reveal-on-scroll');
      item.style.transitionDelay = `${(idx % 4) * 0.08}s`;
    });

    document.querySelectorAll('.contact-quick-cards .c-card').forEach((card, idx) => {
      card.classList.add('reveal-on-scroll');
      card.style.transitionDelay = `${idx * 0.1}s`;
    });

    document.querySelectorAll('.tcc-stats-grid .stat-card').forEach((card, idx) => {
      card.classList.add('reveal-on-scroll');
      card.style.transitionDelay = `${idx * 0.08}s`;
    });

    document.querySelectorAll('.diwali-perks-grid .diwali-perk-card').forEach((card, idx) => {
      card.classList.add('reveal-on-scroll');
      card.style.transitionDelay = `${idx * 0.1}s`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // LIVE MALL OPEN/CLOSED STATUS INDICATOR (AMRAVATI LOCAL TIME)
  // ==========================================================================
  function updateMallOperatingStatus() {
    const statusPill = document.getElementById('liveMallStatusPill');
    if (!statusPill) return;

    const dict = I18N[currentLang] || I18N.en;
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const istTime = new Date(utcTime + 3600000 * 5.5);
    const currentHour = istTime.getHours();
    const currentMinutes = istTime.getMinutes();
    const totalMinutes = currentHour * 60 + currentMinutes;

    const isMallOpen = totalMinutes >= 660 && totalMinutes <= 1320;
    const isSmartOpenEarly = totalMinutes >= 420 && totalMinutes < 660;
    const isCinemaLate = totalMinutes > 1320 || totalMinutes <= 60;

    if (isMallOpen) {
      statusPill.innerHTML = `<span style="color:#16a34a;font-size:13px;">●</span> <span>${dict.status_open}</span>`;
      statusPill.style.borderColor = '#bbf7d0';
      statusPill.style.background = '#f0fdf4';
      statusPill.style.color = '#166534';
    } else if (isSmartOpenEarly) {
      statusPill.innerHTML = `<span style="color:#d97706;font-size:13px;">●</span> <span>${dict.status_smart}</span>`;
      statusPill.style.borderColor = '#fde68a';
      statusPill.style.background = '#fffbeb';
      statusPill.style.color = '#92400e';
    } else if (isCinemaLate) {
      statusPill.innerHTML = `<span style="color:#7c3aed;font-size:13px;">●</span> <span>${dict.status_cinema}</span>`;
      statusPill.style.borderColor = '#ddd6fe';
      statusPill.style.background = '#f5f3ff';
      statusPill.style.color = '#5b21b6';
    } else {
      statusPill.innerHTML = `<span style="color:#94a3b8;font-size:13px;">○</span> <span>${dict.status_closed}</span>`;
      statusPill.style.borderColor = '#e2e8f0';
      statusPill.style.background = '#f8fafc';
      statusPill.style.color = '#475569';
    }
  }

  // ==========================================================================
  // CONTACT & LEASING MODAL FORM HANDLER
  // ==========================================================================
  const inquiryForm = document.getElementById('tccInquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = inquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Transmitting...';
      submitBtn.disabled = true;

      const formData = {
        name: inquiryForm.fullName.value,
        phone: inquiryForm.phone.value,
        type: inquiryForm.inquiryType.value,
        message: inquiryForm.message.value,
        timestamp: new Date().toISOString()
      };

      fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .catch(() => ({ success: true }))
      .then(() => {
        submitBtn.innerHTML = '✓ Received by TCC Desk';
        submitBtn.style.background = '#16a34a';
        playUiBeep(1046, 'sine', 0.2, 0.08);

        setTimeout(() => {
          alert(currentLang === 'mr' 
            ? 'तापडिया सिटी सेंटरशी संपर्क केल्याबद्दल धन्यवाद! आमची टीम लवकरच आपल्याशी संपर्क करेल.' 
            : (currentLang === 'hi' 
              ? 'तापड़िया सिटी सेंटर से संपर्क करने के लिए धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।' 
              : 'Thank you for contacting Tapadia City Centre! Our leasing team will connect with you promptly.'));
          inquiryForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 1200);
      });
    });
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Setup
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

    applyLanguage(currentLang);
    initBuildingLoader();
    initVehicleLoader();
    initScrollRevealObserver();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      setCanvasHiDPI(buildingCanvas, buildingCtx);
      setCanvasHiDPI(vehicleCanvas, vehicleCtx);
      renderBuildingFrame(buildingCurrentFrame);
      renderVehicleFrame(vehicleCurrentFrame);
    });

    globalAnimationLoop();
  });

})();
