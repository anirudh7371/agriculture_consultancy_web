export const getCareersData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const careersData = {
    status: 'success',
    data: {
      heading: isHindi ? 'RAJ Agro में करियर' : 'Careers at RAJ Agro',
      subheading: isHindi
        ? 'भारत भर में कृषि परिवर्तन और किसान सशक्तिकरण के लिए समर्पित टीम से जुड़ें।'
        : 'Join a team passionate about transforming agriculture and empowering farming communities across India.',
      culture: {
        title: isHindi ? 'हमारे साथ क्यों काम करें?' : 'Why Work With Us?',
        cultureLabel: isHindi ? 'संस्कृति' : 'Culture',
        points: [
          {
            icon: 'fa-solid fa-leaf',
            title: isHindi ? 'उद्देश्य-चालित कार्य' : 'Purpose-Driven Work',
            description: isHindi
              ? 'यहाँ प्रत्येक भूमिका सीधे टिकाऊ खाद्य उत्पादन और किसानों की आजीविका को प्रभावित करती है।'
              : 'Every role here directly impacts sustainable food production and farmer livelihoods.',
          },
          {
            icon: 'fa-solid fa-book-open',
            title: isHindi ? 'निरंतर सीखना' : 'Continuous Learning',
            description: isHindi
              ? 'अत्याधुनिक कृषि-विज्ञान, प्रशिक्षण कार्यक्रमों और क्षेत्र अनुसंधान से परिचय।'
              : 'Exposure to cutting-edge agri-science, training programs, and field research.',
          },
          {
            icon: 'fa-solid fa-handshake',
            title: isHindi ? 'सहयोगी संस्कृति' : 'Collaborative Culture',
            description: isHindi
              ? 'एक घनिष्ठ टीम जहाँ हर आवाज़ मायने रखती है और विचारों का स्वागत होता है।'
              : 'A close-knit team where every voice matters and ideas are welcomed.',
          },
          {
            icon: 'fa-solid fa-rocket',
            title: isHindi ? 'विकास के अवसर' : 'Growth Opportunities',
            description: isHindi
              ? 'तेज़ी से बढ़ता संगठन जिसमें स्पष्ट करियर उन्नति पथ हैं।'
              : 'Fast-growing organization with clear career advancement paths.',
          },
        ],
      },
      applicationCta: {
        title: isHindi ? 'क्या आपका रोल सूची में नहीं है?' : 'Don\'t See Your Role?',
        description: isHindi
          ? 'हम हमेशा प्रतिभाशाली और उत्साही लोगों का स्वागत करते हैं। अपना रिज़्यूमे भेजें और बताएं कि आप हमारे मिशन में कैसे योगदान दे सकते हैं।'
          : 'We\'re always open to talented, passionate individuals. Send us your resume and tell us how you can contribute to our mission.',
        email: 'agriconnects1729@gmail.com',
        buttonText: isHindi ? 'अपना आवेदन भेजें' : 'Send Your Application'
      }
    }
  };
  res.status(200).json(careersData);
};
