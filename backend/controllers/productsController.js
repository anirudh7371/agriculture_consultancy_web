export const getProductsData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const productsData = {
    status: 'success',
    data: {
      heading: isHindi ? 'मशरूम खेती उत्पाद' : 'Mushroom Cultivation Products',
      subheading: isHindi
        ? 'कम जगह, कम लागत और अधिक आय की संभावना के साथ मशरूम फार्मिंग शुरू करने के लिए आवश्यक इनपुट और सेटअप सामग्री।'
        : 'Essential inputs and setup materials to start mushroom farming with low space, low cost, and high income potential.',
      categories: [
        {
          id: 0,
          title: isHindi ? 'ताजे मशरूम' : 'Fresh Mushrooms',
          icon: 'fa-solid fa-spa',
          description: isHindi
            ? 'घरेलू उपभोग, खुदरा और व्यावसायिक खरीदारों के लिए उपयुक्त बाजार-तैयार मशरूम किस्में।'
            : 'Market-ready mushroom varieties suitable for home consumption, retail, and commercial buyers.',
          image: '/product1.png',
          products: [
            {
              name: isHindi ? 'ऑयस्टर मशरूम (सफेद)' : 'Oyster Mushroom (White)',
              use: isHindi ? 'घरों और रेस्तरां के लिए उच्च-मांग वाली खाद्य किस्म' : 'High-demand edible variety for households and restaurants',
            },
            {
              name: isHindi ? 'ऑयस्टर मशरूम (गुलाबी)' : 'Oyster Mushroom (Pink)',
              use: isHindi ? 'खुदरा और पाक उपयोग के लिए आकर्षक प्रीमियम किस्म' : 'Attractive premium variant for retail and culinary use',
            },
            {
              name: isHindi ? 'बटन मशरूम' : 'Button Mushroom',
              use: isHindi ? 'मजबूत बाजार मांग वाली लोकप्रिय सर्व-उद्देश्यीय किस्म' : 'Popular all-purpose variety with strong market demand',
            },
            {
              name: isHindi ? 'मिल्की मशरूम' : 'Milky Mushroom',
              use: isHindi ? 'गर्म जलवायु के लिए उपयुक्त और अच्छी शेल्फ परफॉर्मेंस के साथ' : 'Suitable for warm climates with good shelf performance',
            },
          ],
          highlights: isHindi
            ? ['रोज़मर्रा के उपयोग की खाद्य किस्में', 'खुदरा और थोक के लिए उपयुक्त', 'मजबूत स्थानीय बाजार मांग']
            : ['Daily-use edible varieties', 'Retail and wholesale suitable', 'Strong local market demand'],
          tag: isHindi ? 'विशेष' : 'Featured',
        },
        {
          id: 1,
          title: isHindi ? 'खेती इनपुट' : 'Cultivation Inputs',
          icon: 'fa-solid fa-box-open',
          description: isHindi
            ? 'कम्पोस्ट तैयारी से फसल विकास तक वैज्ञानिक मशरूम उत्पादन के लिए मूल सामग्री।'
            : 'Core materials used for scientific mushroom production from compost preparation to crop development.',
          image: './product3.png',
          products: [
            {
              name: isHindi ? 'बटन मशरूम कम्पोस्ट' : 'Button Mushroom Compost',
              use: isHindi ? 'बटन मशरूम खेती के लिए प्राथमिक उगाने का माध्यम' : 'Primary growing medium for button mushroom cultivation',
            },
            {
              name: isHindi ? 'बटन मशरूम केसिंग सामग्री' : 'Button Mushroom Casing Material',
              use: isHindi ? 'नमी बनाए रखने और फलने के लिए शीर्ष-परत सहायता' : 'Top-layer support for moisture retention and fruiting',
            },
            {
              name: isHindi ? 'ऑयस्टर मशरूम स्पॉन' : 'Oyster Mushroom Spawn',
              use: isHindi ? 'ऑयस्टर मशरूम उत्पादन के लिए बीज सामग्री' : 'Seed material for oyster mushroom production',
            },
            {
              name: isHindi ? 'मिल्की मशरूम स्पॉन' : 'Milky Mushroom Spawn',
              use: isHindi ? 'मिल्की मशरूम खेती के लिए बीज सामग्री' : 'Seed material for milky mushroom cultivation',
            },
          ],
          highlights: isHindi
            ? ['छोटी जगह की खेती के लिए उपयुक्त', 'शुरुआती किसानों के लिए आसान इनपुट संयोजन', 'प्रशिक्षण और व्यावसायिक सेटअप में उपयोग']
            : ['Suitable for small-space farming', 'Beginner-friendly input combination', 'Used in training and commercial setup'],
          tag: isHindi ? 'सबसे अधिक मांग' : 'Most Requested',
        },
        {
          id: 2,
          title: isHindi ? 'सब्सट्रेट और कच्चा माल सहायता' : 'Substrate and Raw Material Support',
          icon: 'fa-solid fa-seedling',
          description: isHindi
            ? 'तेज और स्वस्थ मशरूम विकास के लिए फसल अवशेषों और संगत सब्सट्रेट सामग्री के साथ उत्पादन मार्गदर्शन।'
            : 'Production guidance with crop residues and compatible substrate materials for fast and healthy mushroom growth.',
          image: './product4.png',
          products: [
            {
              name: isHindi ? 'धान का पुआल / सूखा भूसा' : 'Paddy Straw / Dry Straw',
              use: isHindi ? 'ऑयस्टर और मिल्की मशरूम सब्सट्रेट के लिए आधार सामग्री' : 'Base material for oyster and milky mushroom substrate',
            },
            {
              name: isHindi ? 'सब्सट्रेट तैयारी मार्गदर्शन' : 'Substrate Preparation Guidance',
              use: isHindi ? 'संदूषण नियंत्रण और उत्पादकता के लिए चरण-दर-चरण प्रसंस्करण' : 'Step-wise processing for contamination control and productivity',
            },
            {
              name: isHindi ? 'नमी और तापमान प्रबंधन इनपुट' : 'Humidity and Temperature Management Inputs',
              use: isHindi ? 'स्थिर उत्पादन के लिए आदर्श फसल वातावरण बनाए रखता है' : 'Maintains ideal crop environment for steady production',
            },
            {
              name: isHindi ? 'स्वच्छता और संचालन आवश्यकताएं' : 'Hygiene and Handling Essentials',
              use: isHindi ? 'फसल सुरक्षा में सुधार और नुकसान कम करता है' : 'Improves crop safety and reduces losses',
            },
          ],
          highlights: isHindi
            ? ['कम लागत वाले सेटअप के लिए अनुकूल', 'त्वरित फसल बदलाव (3-4 सप्ताह)', 'बार-बार उत्पादन चक्र समर्थन']
            : ['Low-cost setup friendly', 'Quick crop turnaround (3-4 weeks)', 'Supports repeat production cycles'],
          tag: isHindi ? 'लोकप्रिय' : 'Popular',
        },
        {
          id: 3,
          title: isHindi ? 'फार्म संरचना और सेटअप समाधान' : 'Farm Structure and Setup Solutions',
          icon: 'fa-solid fa-warehouse',
          description: isHindi
            ? 'स्थानीय परिस्थितियों और खेती के पैमाने के आधार पर मशरूम इंफ्रास्ट्रक्चर के लिए निर्माण योजना सहायता।'
            : 'Construction planning support for mushroom infrastructure based on local conditions and farming scale.',
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
          products: [
            {
              name: isHindi ? 'मशरूम हट निर्माण योजना' : 'Mushroom Hut Construction Plan',
              use: isHindi ? 'छोटे और मध्यम किसानों के लिए कॉम्पैक्ट यूनिट डिजाइन' : 'Compact unit design for small and medium farmers',
            },
            {
              name: isHindi ? 'पारंपरिक झोपड़ी मॉडल सेटअप' : 'Traditional Jhopdi Model Setup',
              use: isHindi ? 'स्थानीयकृत उत्पादन के लिए किफायती संरचना विकल्प' : 'Economical structure option for localized production',
            },
            {
              name: isHindi ? 'शेड निर्माण लेआउट' : 'Shed Construction Layout',
              use: isHindi ? 'बेहतर प्रक्रिया प्रवाह और परिचालन प्रबंधन' : 'Better process flow and operational management',
            },
            {
              name: isHindi ? 'बैच-वार विस्तार योजना' : 'Batch-wise Expansion Planning',
              use: isHindi ? 'होम यूनिट से वाणिज्यिक मशरूम फार्म तक विस्तार' : 'Scale from home unit to commercial mushroom farm',
            },
          ],
          highlights: isHindi
            ? ['बजट के अनुसार अनुकूलनीय', 'क्षेत्र-परीक्षित व्यावहारिक मॉडल', 'प्लांट और फार्म-स्तर के सेटअप के लिए उपयुक्त']
            : ['Customizable by budget', 'Field-tested practical models', 'Suitable for plant and farm-level setups'],
          tag: '',
        },
        {
          id: 4,
          title: isHindi ? 'फसल-पश्चात और व्यवसाय सक्षमता' : 'Post-Harvest and Business Enablement',
          icon: 'fa-solid fa-chart-line',
          description: isHindi
            ? 'किसानों को उत्पादन से लाभदायक बिक्री तक ले जाने में मदद करने वाले सहायता उत्पाद और संदर्भ संसाधन।'
            : 'Support products and reference resources to help farmers move from production to profitable selling.',
          image: '/product2.png',
          products: [
            {
              name: isHindi ? 'हार्वेस्ट हैंडलिंग SOP' : 'Harvest Handling SOP',
              use: isHindi ? 'ताजगी बनाए रखने और फसल-पश्चात नुकसान कम करने में मदद करता है' : 'Helps maintain freshness and reduce post-harvest loss',
            },
            {
              name: isHindi ? 'पैकेजिंग मार्गदर्शन' : 'Packaging Guidance',
              use: isHindi ? 'शेल्फ अपील और बाजार स्वीकृति में सुधार करता है' : 'Improves shelf appeal and market acceptance',
            },
            {
              name: isHindi ? 'मार्केटिंग स्टार्टर फ्रेमवर्क' : 'Marketing Starter Framework',
              use: isHindi ? 'उत्पाद को स्थानीय दुकानों, होटलों और घरों से जोड़ता है' : 'Connects produce to local shops, hotels, and households',
            },
            {
              name: isHindi ? 'ऋण दस्तावेज़ीकरण संदर्भ सेट' : 'Loan Documentation Reference Set',
              use: isHindi ? 'फार्म वित्त के लिए योजना और तैयारी को समर्थन देता है' : 'Supports planning and preparation for farm finance',
            },
          ],
          highlights: isHindi
            ? ['व्यवसाय-उन्मुख सहायता', 'बाजार-तत्परता पर केंद्रित', 'पहली बार उद्यमियों के लिए डिज़ाइन किया गया']
            : ['Business-oriented support', 'Market-readiness focused', 'Designed for first-time entrepreneurs'],
          tag: '',
        },
      ],
      cta: {
        title: isHindi ? 'घर से मशरूम व्यवसाय शुरू करें' : 'Build Your Mushroom Business from Home',
        description: isHindi
          ? 'सही उत्पाद, प्रैक्टिकल गाइडेंस और प्रशिक्षण सपोर्ट के साथ अपनी मशरूम फार्मिंग यात्रा सफलतापूर्वक शुरू करें।'
          : 'Get the right products, practical guidance, and training support to start your mushroom farming journey successfully.',
        link: '/contact',
        buttonText: isHindi ? 'उत्पाद और सेटअप मार्गदर्शन लें' : 'Get Product & Setup Guidance'
      }
    }
  };
  res.status(200).json(productsData);
};
