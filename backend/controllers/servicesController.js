export const getServicesData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const servicesData = {
    status: 'success',
    data: {
      heading: isHindi ? 'मशरूम कंसल्टेंसी सेवाएं' : 'Mushroom Consultancy Services',
      subheading: isHindi
        ? 'किसानों और एग्री-उद्यमियों के लिए चरणबद्ध प्रैक्टिकल कंसल्टेंसी और प्रशिक्षण, ताकि आप आत्मविश्वास के साथ लाभकारी मशरूम फार्मिंग शुरू कर सकें।'
        : 'Practical, step-by-step consultancy and training for farmers and entrepreneurs who want to start profitable mushroom farming with confidence.',
      services: [
        {
          id: 1,
          title: isHindi ? '5-दिवसीय ऑफलाइन मशरूम खेती प्रशिक्षण कार्यक्रम' : '5-Day Offline Mushroom Cultivation Program',
          icon: 'fa-solid fa-calendar-days',
          image: './services1.png',
          description: isHindi
            ? 'मशरूम खेती का बेसिक से एडवांस स्तर तक का समग्र 5-दिवसीय प्रैक्टिकल प्रशिक्षण कार्यक्रम। सीखें कि कम जगह और कम प्रारंभिक निवेश से घर-आधारित मशरूम व्यवसाय कैसे शुरू करें।'
            : 'A complete 5-day practical training program covering mushroom cultivation from basic to advanced level. Learn how to start a home-based mushroom business with small space and low initial investment.',
          features: isHindi
            ? ['मशरूम के प्रकार: बटन, ऑयस्टर और मिल्की', 'छोटी जगह में मशरूम की खेती', 'पर्यावरण नियंत्रण (तापमान, नमी, स्वच्छता)', 'कटाई, पैकेजिंग और मार्केटिंग की मूल बातें']
            : ['Types of mushrooms: button, oyster, and milky', 'Cultivation in small spaces', 'Environmental control (temperature, humidity, hygiene)', 'Harvesting, packaging, and marketing basics'],
          duration: isHindi ? '5 दिन (ऑफलाइन)' : '5 Days (Offline)',
          mode: isHindi ? 'ऑन-साइट (पटना)' : 'On-site (Patna)',
        },
        {
          id: 2,
          title: isHindi ? 'एक-दिवसीय फास्ट-ट्रैक प्रशिक्षण (अतिरिक्त समय के साथ)' : 'One-Day Fast-Track Training (With Extra Time)',
          icon: 'fa-solid fa-spa',
          image: './services2.png',
          description: isHindi
            ? 'तेजी से सीखना चाहने वाले शिक्षार्थियों के लिए हम एक-दिवसीय इंटेंसिव फॉर्मेट उपलब्ध कराते हैं जिसमें अतिरिक्त मेंटरिंग समय भी शामिल है, ताकि हर जरूरी कदम सही से समझा जा सके।'
            : 'For learners who want faster completion, we provide a one-day intensive format with additional mentoring time so every important step is still understood properly.',
          features: isHindi
            ? ['व्यक्तिगत शिक्षण सहायता', 'विस्तृत प्रैक्टिकल व्याख्या', 'Q&A पर केंद्रित मेंटरिंग', 'अनुभवी या समय-सीमित शिक्षार्थियों के लिए उपयुक्त']
            : ['Personalized learning support', 'Extended practical explanation', 'Q&A focused mentoring', 'Ideal for experienced or time-limited learners'],
          duration: isHindi ? '1 दिन (इंटेंसिव)' : '1 Day (Intensive)',
          mode: isHindi ? 'ऑन-साइट' : 'On-site',
        },
        {
          id: 3,
          title: isHindi ? 'फार्म इंफ्रास्ट्रक्चर सेटअप कंसल्टेंसी' : 'Farm Infrastructure Setup Consultancy',
          icon: 'fa-solid fa-warehouse',
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
          description: isHindi
            ? 'आपके बजट और पैमाने के अनुसार सही मशरूम उत्पादन संरचना डिजाइन और निर्माण पर मार्गदर्शन।'
            : 'Guidance on designing and building the right mushroom production structure according to your budget and scale.',
          features: isHindi
            ? ['बटन मशरूम कम्पोस्ट और केसिंग सामग्री मार्गदर्शन', 'मशरूम हट निर्माण योजना', 'पारंपरिक झोपड़ी मॉडल सेटअप सहायता', 'शेड निर्माण और लेआउट मार्गदर्शन']
            : ['Button mushroom compost and casing material guidance', 'Mushroom hut construction planning', 'Traditional jhopdi (hut) model setup support', 'Shed construction and layout guidance'],
          duration: isHindi ? 'प्रोजेक्ट-आधारित' : 'Project-based',
          mode: isHindi ? 'ऑन-साइट + कंसल्टेंसी' : 'On-site + Consultancy',
        },
        {
          id: 4,
          title: isHindi ? 'ऋण और दस्तावेज़ीकरण सहायता' : 'Loan and Documentation Support',
          icon: 'fa-solid fa-file-contract',
          image: './services3.png',
          description: isHindi
            ? 'मशरूम फार्म ऋण प्रक्रिया, आवश्यक दस्तावेज़ और लापता कागजात की तैयारी के लिए पूर्ण सहायता।'
            : 'Complete support for understanding the mushroom farm loan process, required documents, and preparation of missing paperwork.',
          features: isHindi
            ? ['संदर्भ के लिए आवश्यक दस्तावेज़ सूची उपलब्ध', 'लापता दस्तावेज़ तैयार करने का मार्गदर्शन', 'सरकारी योजनाएं और आधिकारिक वेबसाइटें समझाई जाती हैं', 'स्पष्टता के लिए अनुमोदित ऋण पेपरवर्क का नमूना दिखाया जाता है']
            : ['Required document list provided for reference', 'Guidance for preparing missing documents', 'Government schemes and official websites explained', 'Sample approved loan paperwork shown for clarity'],
          duration: isHindi ? 'आवश्यकतानुसार' : 'As required',
          mode: isHindi ? 'कंसल्टेंसी + रेफरेंस सपोर्ट' : 'Consultancy + Reference Support',
        },
        {
          id: 5,
          title: isHindi ? 'मशरूम प्लांट कार्यान्वयन मेंटरशिप' : 'Mushroom Plant Implementation Mentorship',
          icon: 'fa-solid fa-industry',
          image: './media2.jpeg',
          description: isHindi
            ? 'जो किसान पूर्ण मशरूम प्लांट या उद्योग सेटअप की योजना बना रहे हैं, उनके लिए सही कार्यान्वयन सुनिश्चित करने हेतु संरचित प्रैक्टिकल फॉलो-अप अनिवार्य है।'
            : 'For farmers planning a full mushroom plant or industry setup, structured practical follow-up is mandatory to ensure correct implementation.',
          features: isHindi
            ? ['लगभग 40 दिनों में न्यूनतम 6 प्लांट विज़िट', 'हर चरण पर पूर्ण प्रक्रिया समझ', 'सेटअप के दौरान हैंड्स-ऑन समस्या समाधान', 'प्रशिक्षण के बाद स्वतंत्र फार्म निर्माण के लिए सहायता']
            : ['Minimum 6 plant visits in around 40 days', 'Complete process understanding at each stage', 'Hands-on troubleshooting during setup', 'Support for independent farm construction after training'],
          duration: isHindi ? '40-दिवसीय गाइडेड विंडो' : '40-Day Guided Window',
          mode: isHindi ? 'ऑन-साइट प्लांट विज़िट' : 'On-site Plant Visits',
        },
        {
          id: 6,
          title: isHindi ? 'प्रगतिशील किसानों के लिए प्रशिक्षण-प्रथम सलाह' : 'Training-First Advisory for Progressive Farmers',
          icon: 'fa-solid fa-graduation-cap',
          image: './media1.png',
          description: isHindi
            ? 'हम दृढ़ता से सुझाव देते हैं कि मशरूम खेती उचित प्रैक्टिकल प्रशिक्षण के बाद ही शुरू करें। इससे जोखिम कम होता है और टाले जा सकने वाले नुकसान से बचाव होता है।'
            : 'We strongly recommend starting mushroom cultivation only after proper practical training. This reduces risk and helps avoid avoidable losses.',
          features: isHindi
            ? ['केवल सिद्धांत नहीं, अभ्यास पर केंद्रित शिक्षण', 'KVKs और कृषि विश्वविद्यालयों में प्रशिक्षण कार्यक्रमों की जानकारी', 'नए और प्रगतिशील किसानों के लिए उपयुक्त', 'वैज्ञानिक तरीके से खेती शुरू करने का आत्मविश्वास']
            : ['Practice-focused learning, not only theory', 'Awareness of training programs at KVKs and agricultural universities', 'Suitable for new and progressive farmers', 'Confidence to start cultivation scientifically'],
          duration: isHindi ? 'फार्म लॉन्च से पहले' : 'Before Farm Launch',
          mode: isHindi ? 'सलाह + प्रैक्टिकल ओरिएंटेशन' : 'Advisory + Practical Orientation',
        },
      ],
      cta: {
        title: isHindi ? 'प्रशिक्षण से शुरुआत करें, आत्मविश्वास से आगे बढ़ें' : 'Start with Training, Grow with Confidence',
        description: isHindi
          ? 'डॉ. राज कुमार से जुड़ें और प्रशिक्षण, फार्म सेटअप और डॉक्यूमेंटेशन के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।'
          : 'Connect with Dr. Raj Kumar and get guidance for training, farm setup, and documentation support.',
        link: '/contact',
        buttonText: isHindi ? 'ट्रेनिंग और कंसल्टेंसी बुक करें' : 'Book Training & Consultancy'
      }
    }
  };
  res.status(200).json(servicesData);
};
