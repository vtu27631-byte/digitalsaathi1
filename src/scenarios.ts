import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  // --- CYBER SECURITY ---
  {
    id: 'otp-scam',
    title: 'The "Bank" Call',
    category: 'security',
    type: 'banking',
    saathiIntro: 'Abhi, you just received a call from someone claiming to be from your bank. They say your account is blocked.',
    saathiPrompt: 'They are asking for the OTP you just received to "unblock" it. What will you do?',
    content: {
      message: 'Your account XXX123 is blocked. Share the OTP sent to your mobile to unblock immediately.',
      otp: '458921',
      sender: 'HDFC-NO'
    },
    correctAction: 'refuse-otp',
    wrongActions: [
      {
        id: 'share-otp',
        alertTitle: '⚠️ Critical Security Risk!',
        alertMessage: 'Sharing an OTP over the phone gives scammers full control of your bank account.',
        explanation: 'Banks NEVER ask for OTPs on calls. OTP stands for One-Time Password; it is your secret key to authorize transactions.'
      }
    ],
    successMessage: 'Great job, Abhi!',
    successExplanation: 'You identified a classic phishing scam. Always remember: No bank official will ever ask for your OTP or password.',
    translations: {
      hindi: {
        title: 'बैंक कॉल',
        saathiIntro: 'अभि, आपको किसी का फोन आया है जो आपके बैंक से होने का दावा कर रहा है। वे कह रहे हैं कि आपका अकाउंट ब्लॉक हो गया है।',
        saathiPrompt: 'वे इसे "अनब्लॉक" करने के लिए आपके पास आए ओटीपी (OTP) मांग रहे हैं। आप क्या करेंगे?',
        content: {
          message: 'आपका अकाउंट XXX123 ब्लॉक कर दिया गया है। तुरंत अनब्लॉक करने के लिए अपने मोबाइल पर भेजा गया ओटीपी साझा करें।',
          otp: '458921',
          sender: 'HDFC-NO'
        },
        successMessage: 'बहुत बढ़िया, अभि!',
        successExplanation: 'आपने एक धोखाधड़ी वाली कॉल को पहचान लिया। हमेशा याद रखें: बैंक का कोई भी अधिकारी आपसे कभी भी ओटीपी या पासवर्ड नहीं मांगेगा।',
        wrongActions: [
          {
            id: 'share-otp',
            alertTitle: '⚠️ गंभीर सुरक्षा जोखिम!',
            alertMessage: 'फोन पर ओटीपी साझा करने से जालसाजों को आपके बैंक खाते का पूरा नियंत्रण मिल जाता है।',
            explanation: 'बैंक कभी भी कॉल पर ओटीपी नहीं मांगते। ओटीपी (वन-टाइम पासवर्ड) आपके बैंक के लेन-देन को सुरक्षित करने की गुप्त चाबी है।'
          }
        ]
      },
      tamil: {
        title: 'வங்கி அழைப்பு',
        saathiIntro: 'அபி, உங்கள் வங்கியில் இருந்து பேசுவதாக கூறி யாரோ உங்களை அழைக்கிறார்கள். உங்கள் கணக்கு முடக்கப்பட்டுள்ளதாக அவர்கள் கூறுகிறார்கள்.',
        saathiPrompt: 'அதை "மீட்க" உங்கள் போனுக்கு வந்த OTP-ஐ அவர்கள் கேட்கிறார்கள். நீங்கள் என்ன செய்வீர்கள்?',
        content: {
          message: 'உங்கள் கணக்கு XXX123 முடக்கப்பட்டுள்ளது. உடனடியாக கணக்கை மீட்க உங்கள் மொபைலுக்கு வந்த OTP-ஐ பகிரவும்.',
          otp: '458921',
          sender: 'HDFC-NO'
        },
        successMessage: 'மிகவும் அருமை, அபி!',
        successExplanation: 'நீங்கள் ஒரு மோசடி அழைப்பை சரியாக அடையாளம் கண்டீர்கள். எப்போதும் நினைவில் கொள்ளுங்கள்: வங்கி ஊழியர்கள் ஒருபோதும் உங்களிடம் OTP அல்லது கடவுச்சொல்லைக் கேட்க மாட்டார்கள்.',
        wrongActions: [
          {
            id: 'share-otp',
            alertTitle: '⚠️ மிக ஆபத்தான பாதுகாப்பு மீறல்!',
            alertMessage: 'OTP-ஐ போனில் பகிர்வது உங்கள் வங்கிக் கணக்கின் முழு கட்டுப்பாட்டையும் மோசடி செய்பவர்களிடம் ஒப்படைப்பதற்கு சமம்.',
            explanation: 'வங்கிகள் ஒருபோதும் போனில் OTP கேட்காது. OTP என்பது உங்கள் கணக்கை பாதுகாக்க உதவும் ஒரு ரகசிய குறியீடு.'
          }
        ]
      },
      telugu: {
        title: 'బ్యాంక్ కాల్',
        saathiIntro: 'అభి, మీ బ్యాంక్ నుండి ఎవరైనా మిమ్మల్ని పిలుస్తున్నారు మీ అకౌంట్ బ్లాక్ అయ్యిందని చెప్తున్నారు.',
        saathiPrompt: 'దాన్ని "అన్‌బ్లాక్" చేయడానికి మీ ఫోన్‌కి వచ్చిన OTP కావలని అడుగుతున్నారు. మీరు ఏమి చేస్తారు?',
        content: {
          message: 'మీ అకౌంట్ XXX123 బ్లాక్ చేయబడింది. వెంటనే అన్‌బ్లాక్ చేయడానికి మీ మొబైల్‌కు వచ్చిన OTPని షేర్ చేయండి.',
          otp: '458921',
          sender: 'HDFC-NO'
        },
        successMessage: 'చాలా బాగుంది, అభి!',
        successExplanation: 'మీరు ఒక మోసపూరిత కాల్‌ను గుర్తించారు. బ్యాంక్ అధికారులు ఎప్పుడూ OTP పిన్ అడగరు అని గుర్తుంచుకోండి.',
        wrongActions: [
          {
            id: 'share-otp',
            alertTitle: '⚠️ భద్రతా ముప్పు!',
            alertMessage: 'ఫోన్ లో OTP షేర్ చేయడం వల్ల మీ బ్యాంక్ అకౌంట్ మొత్తం మోసగాళ్ల చేతికి వెళ్తుంది.',
            explanation: 'బ్యాంకులు ఎప్పుడూ ఫోన్ ద్వారా OTP అడగవు. OTP అనేది మీ అకౌంట్ భద్రతకు రహస్య తాళం.'
          }
        ]
      },
      kannada: {
        title: 'ಬ್ಯಾಂಕ್ ಕರೆ',
        saathiIntro: 'ಅಭಿ, ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನಿಂದ ಯಾರಾದರೂ ಕರೆ ಮಾಡುತ್ತಿದ್ದಾರೆ ಮತ್ತು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ ಎಂದು ಹೇಳುತ್ತಿದ್ದಾರೆ.',
        saathiPrompt: 'ಅದನ್ನು "ಅನ್ಬ್ಲಾಕ್" ಮಾಡಲು ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಬಂದ OTP ಅನ್ನು ಕೇಳುತ್ತಿದ್ದಾರೆ. ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?',
        content: {
          message: 'ನಿಮ್ಮ ಖಾತೆ XXX123 ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ. ತಕ್ಷಣವೇ ಅನ್ಬ್ಲಾಕ್ ಮಾಡಲು ನಿಮ್ಮ ಮೊಬೈಲ್ಗೆ ಬಂದ OTP ಅನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.',
          otp: '458921',
          sender: 'HDFC-NO'
        },
        successMessage: 'ತುಂಬಾ ಒಳ್ಳೆಯದು, ಅಭಿ!',
        successExplanation: 'ನೀವು ಮೋಸದ ಕರೆಯನ್ನು ಸರಿಯಾಗಿ ಗುರುತಿಸಿದ್ದೀರಿ. ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಗಳು ಎಂದಿಗೂ OTP ಕೇಳುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ನೆನಪಿಡಿ.',
        wrongActions: [
          {
            id: 'share-otp',
            alertTitle: '⚠️ ಭದ್ರತಾ ಅಪಾಯ!',
            alertMessage: 'ಫೋನ್‌ ಮೂಲಕ OTP ಹಂಚಿಕೊಳ್ಳುವುದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯ ನಿಯಂತ್ರಣವನ್ನು ವಂಚಕರಿಗೆ ನೀಡಿದಂತೆ.',
            explanation: 'ಬ್ಯಾಂಕ್‌ಗಳು ಎಂದಿಗೂ ಫೋನ್ ಮೂಲಕ OTP ಕೇಳುವುದಿಲ್ಲ. OTP ನಿಮ್ಮ ಖಾತೆಯ ರಹಸ್ಯ ಕೀಲಿ ಇದ್ದಂತೆ.'
          }
        ]
      }
    }
  },
  {
    id: 'whatsapp-link',
    title: 'Free Gift Trap',
    category: 'security',
    type: 'whatsapp',
    saathiIntro: 'A friend sent you a message about a "Free iPhone Giveaway" from an unknown brand.',
    saathiPrompt: 'The message has a link. Should you click it to see if it\'s real?',
    content: {
      sender: 'Ramesh',
      text: 'Hey! I just got a free iPhone from this link! Try it now: http://free-gifts-win-now.com/iphone',
      timestamp: '10:30 AM'
    },
    correctAction: 'ignore-link',
    wrongActions: [
      {
        id: 'click-link',
        alertTitle: '⚠️ Malicious Link Detected!',
        alertMessage: 'Suspicious links can install malware or steal your personal data.',
        explanation: 'Scammers use "Free Gifts" to lure people into clicking links that steal login details or infect devices.'
      }
    ],
    successMessage: 'Smart move!',
    successExplanation: 'Ignoring "too good to be true" links is the best way to stay safe on WhatsApp.',
    translations: {
      hindi: {
        title: 'मुफ्त उपहार का जाल',
        saathiIntro: 'एक पुराने दोस्त ने आपको किसी अनजान ब्रांड की ओर से "मुफ्त आईफोन गिवअवे" (Free iPhone Giveaway) के बारे में एक मैसेज भेजा है।',
        saathiPrompt: 'मैसेज में एक लिंक है। क्या आपको यह देखने के लिए इस पर क्लिक करना चाहिए कि क्या यह सच है?',
        content: {
          sender: 'रमेश',
          text: 'अरे! मुझे इस लिंक से एक मुफ्त आईफोन मिला है! अभी कोशिश करें: http://free-gifts-win-now.com/iphone',
          timestamp: '10:30 AM'
        },
        successMessage: 'सही फैसला!',
        successExplanation: '"जरूरत से ज्यादा अच्छे" दिखने वाले लिंक को नजरअंदाज करना व्हाट्सएप पर सुरक्षित रहने का सबसे अच्छा तरीका है।',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ हानिकारक लिंक पाया गया!',
            alertMessage: 'संदिग्ध लिंक आपके फोन में वायरस (Malware) डाल सकते हैं या आपका निजी डेटा चुरा सकते हैं।',
            explanation: 'जालसाज "मुफ्त उपहार" का लालच देकर लोगों को ऐसे लिंक पर क्लिक करवाते हैं जो लॉगिन जानकारी चुराते हैं या डिवाइस को खराब करते हैं।'
          }
        ]
      },
      tamil: {
        title: 'இலவச பரிசு வலை',
        saathiIntro: 'உங்களுக்குத் தெரிந்த ஒரு நண்பர் "இலவச ஐபோன் பரிசு" பற்றி ஒரு செய்தியை அனுப்பியுள்ளார்.',
        saathiPrompt: 'அந்த செய்தியில் ஒரு லிங்க் (Link) உள்ளது. அது உண்மையா என்று பார்க்க நீங்கள் அதை கிளிக் செய்வீர்களா?',
        content: {
          sender: 'ரமேஷ்',
          text: 'நண்பா! இந்த லிங்க் மூலம் எனக்கு இலவசமாக ஐபோன் கிடைத்தது! நீங்களும் முயற்சிக்கவும்: http://free-gifts-win-now.com/iphone',
          timestamp: '10:30 AM'
        },
        successMessage: 'சரியான முடிவு!',
        successExplanation: 'வாட்ஸ்அப்பில் வரும் "நம்பமுடியாத" சலுகைகளை புறக்கணிப்பதே பாதுகாப்பானது.',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ ஆபத்தான லிங்க்!',
            alertMessage: 'சந்தேகத்திற்கிடமான லிங்குகள் உங்கள் போனில் வைரஸ்களை பரப்பலாம் அல்லது உங்கள் தகவல்களை திருடலாம்.',
            explanation: 'மோசடி செய்பவர்கள் "இலவச பரிசுகள்" மூலம் மக்களை ஏமாற்றி அவர்களின் தகவல்களை திருட முயற்சிக்கிறார்கள்.'
          }
        ]
      },
      telugu: {
        title: 'ఉచిత బహుమతి ఉచ్చు',
        saathiIntro: 'తెలియని బ్రాండ్ నుండి "ఉచిత ఐఫోన్ గివ్‌అవే" గురించి స్నేహితుడు మీకు సందేశం పంపారు.',
        saathiPrompt: 'సందేశంలో ఒక లింక్ ఉంది. అది నిజమేమో చూడటానికి మీరు దానిపై క్లిక్ చేస్తారా?',
        content: {
          sender: 'రమేష్',
          text: 'హే! ఈ లింక్ నుండి నాకు ఉచిత ఐఫోన్ వచ్చింది! ఇప్పుడే ప్రయత్నించండి: http://free-gifts-win-now.com/iphone',
          timestamp: '10:30 AM'
        },
        successMessage: 'మంచి నిర్ణయం!',
        successExplanation: 'వాట్సాప్‌లో వచ్చే "నమ్మలేని" ఆఫర్‌లను విస్మరించడమే సురక్షితం.',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ హానికరమైన లింక్ కనుగొనబడింది!',
            alertMessage: 'అనుమానాస్పద లింకులు మీ ఫోన్‌లోకి వైరస్‌లను పంపవచ్చు లేదా మీ వ్యక్తిగత డేటాను దొంగిలించవచ్చు.',
            explanation: 'మోసగాళ్లు "ఉచిత బహుమతుల" పేరుతో ప్రజలను ఏమార్చి వారి సమాచారాన్ని దొంగిలిస్తారు.'
          }
        ]
      },
      kannada: {
        title: 'ಉಚಿತ ಉಡುಗೊರೆ ಬಲೆ',
        saathiIntro: 'ಪರಿಚಯವಿಲ್ಲದ ಬ್ರಾಂಡ್‌ನಿಂದ "ಉಚಿತ ಐಫೋನ್ ಗಿವ್‌ಅವೇ" ಬಗ್ಗೆ ಸ್ನೇಹಿತರೊಬ್ಬರು ನಿಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿದ್ದಾರೆ.',
        saathiPrompt: 'ಸಂದೇಶದಲ್ಲಿ ಒಂದು ಲಿಂಕ್ ಇದೆ. ಅದು ನಿಜವೇ ಎಂದು ನೋಡಲು ನೀವು ಅದನ್ನು ಕ್ಲಿಕ್ ಮಾಡುತ್ತೀರಾ?',
        content: {
          sender: 'ರಮೇಶ',
          text: 'ಹೇ! ಈ ಲಿಂಕ್‌ನಿಂದ ನನಗೆ ಉಚಿತ ಐಫೋನ್ ಸಿಕ್ಕಿದೆ! ಈಗಲೇ ಪ್ರಯತ್ನಿಸಿ: http://free-gifts-win-now.com/iphone',
          timestamp: '10:30 AM'
        },
        successMessage: 'ಸರಿಯಾದ ನಿರ್ಧಾರ!',
        successExplanation: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬರುವ "ನಂಬಲಸಾಧ್ಯವಾದ" ಆಫರ್‌ಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸುವುದೇ ಸುರಕ್ಷಿತ.',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ ಅಪಾಯಕಾರಿ ಲಿಂಕ್ ಪತ್ತೆಯಾಗಿದೆ!',
            alertMessage: 'ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳು ನಿಮ್ಮ ಫೋನ್‌ಗೆ ವೈರಸ್ ಹರಡಬಹುದು ಅಥವಾ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಕದಿಯಬಹುದು.',
            explanation: 'ವಂಚಕರು "ಉಡುಗೊರೆಗಳ" ಹೆಸರಿನಲ್ಲಿ ಜನರನ್ನು ಏಮಾರಿಸಿ ಅವರ ಮಾಹಿತಿಯನ್ನು ಕದಿಯುತ್ತಾರೆ.'
          }
        ]
      }
    }
  },
  {
    id: 'upi-scam',
    title: 'Unexpected Prize',
    category: 'security',
    type: 'upi',
    saathiIntro: 'You see a notification on your UPI app. Someone is "sending" you ₹5,000 prize money.',
    saathiPrompt: 'It says "Click Pay to Receive". Does that sound right to you?',
    content: {
      amount: '5000',
      note: 'Prize Money for Lucky Winner',
      sender: 'LuckyDraw_Rewards'
    },
    correctAction: 'decline-request',
    wrongActions: [
      {
        id: 'click-pay',
        alertTitle: '⚠️ Financial Fraud Alert!',
        alertMessage: 'You NEVER need to click "Pay" or enter your PIN to receive money.',
        explanation: 'Payment apps only require your PIN when you are SENDING money. If someone asks you to click "Pay" to receive, it is a scam.'
      }
    ],
    successMessage: 'Perfect!',
    successExplanation: 'You saved your money! Scammers often create "Request" links that look like they are giving you money, but they are actually taking it.',
    translations: {
      hindi: {
        title: 'अचानक मिला इनाम',
        saathiIntro: 'आपको अपने UPI ऐप पर एक नोटिफिकेशन दिखता है। कोई आपको ₹5,000 की इनामी राशि "भेज" रहा है।',
        saathiPrompt: 'इसमें लिखा है "प्राप्त करने के लिए पे (Pay) पर क्लिक करें"। क्या यह आपको सही लगता है?',
        content: {
          amount: '5000',
          note: 'लकी विजेता के लिए इनामी राशि',
          sender: 'LuckyDraw_Rewards'
        },
        successMessage: 'शानदार!',
        successExplanation: 'आपने अपने पैसे बचा लिए! जालसाज अक्सर "अनुरोध" (Request) लिंक बनाते हैं जो देखने में ऐसा लगता है कि वे आपको पैसे दे रहे हैं, लेकिन वास्तव में वे पैसे निकाल रहे होते हैं।',
        wrongActions: [
          {
            id: 'click-pay',
            alertTitle: '⚠️ वित्तीय धोखाधड़ी की चेतावनी!',
            alertMessage: 'पैसे प्राप्त करने के लिए आपको कभी भी "पे (Pay)" पर क्लिक करने या अपना पिन (PIN) दर्ज करने की आवश्यकता नहीं होती है।',
            explanation: 'पेमेंट ऐप केवल तभी आपका पिन मांगते हैं जब आप पैसे भेज (SEND) रहे होते हैं। अगर कोई आपको पैसे प्राप्त करने के लिए "पे" पर क्लिक करने को कहता है, तो वह धोखाधड़ी है।'
          }
        ]
      },
      tamil: {
        title: 'எதிர்பாராத பரிசு',
        saathiIntro: 'உங்கள் UPI செயலியில் ஒரு அறிவிப்பைக் காண்கிறீர்கள். யாரோ உங்களுக்கு ₹5,000 பரிசுத் தொகையை "அனுப்புகிறார்கள்".',
        saathiPrompt: 'அதில் "பெற்றுக்கொள்ள Pay என்பதை கிளிக் செய்யவும்" என்று உள்ளது. இது உங்களுக்கு சரியாகத் தோன்றுகிறதா?',
        content: {
          amount: '5000',
          note: 'அதிர்ஷ்டசாலிக்கான பரிசுத் தொகை',
          sender: 'LuckyDraw_Rewards'
        },
        successMessage: 'மிகவும் சிறப்பு!',
        successExplanation: 'உங்கள் பணத்தை காப்பாற்றிவிட்டீர்கள்! மோசடி செய்பவர்கள் பெரும்பாலும் உங்களுக்கு பணம் தருவது போல "Request" லிங்குகளை அனுப்புவார்கள், ஆனால் உண்மையில் அது உங்கள் பணத்தை எடுப்பதற்கான வழியாகும்.',
        wrongActions: [
          {
            id: 'click-pay',
            alertTitle: '⚠️ நிதி மோசடி எச்சரிக்கை!',
            alertMessage: 'பணம் பெறுவதற்கு நீங்கள் ஒருபோதும் "Pay" என்பதை அழுத்தவோ அல்லது உங்கள் PIN-ஐ உள்ளிடவோ தேவையில்லை.',
            explanation: 'நீங்கள் பணம் அனுப்பும்போது மட்டுமே செயலிகள் உங்கள் PIN-ஐ கேட்கும். யாராவது பணம் பெற "Pay" என்பதை அழுத்தச் சொன்னால், அது ஒரு மோசடி.'
          }
        ]
      },
      telugu: {
        title: 'ఊహించని బహుమతి',
        saathiIntro: 'మీ UPI యాప్‌లో ఒక నోటిఫికేషన్ కనిపిస్తుంది. ఎవరో మీకు ₹5,000 బహుమతిని "పంపిస్తున్నారు".',
        saathiPrompt: 'అందులో "స్వీకరించడానికి పే (Pay) క్లిక్ చేయండి" అని ఉంది. మీరు ఏమి చేస్తారు?',
        content: {
          amount: '5000',
          note: 'లక్కీ విజేత కోసం బహుమతి నగదు',
          sender: 'LuckyDraw_Rewards'
        },
        successMessage: 'అద్భుతం!',
        successExplanation: 'మీరు మీ డబ్బును కాపాడుకున్నారు! మోసగాళ్లు తరచుగా మీకు డబ్బు ఇస్తున్నట్లు కనిపించే "Request" లింక్‌లను పంపిస్తారు, కానీ నిజానికి అవి మీ అకౌంట్ నుండి డబ్బు తీయడానికే.',
        wrongActions: [
          {
            id: 'click-pay',
            alertTitle: '⚠️ ఆర్థిక మోసాల హెచ్చరిక!',
            alertMessage: 'డబ్బు తీసుకోవడానికి మీరు ఎప్పుడూ "Pay" క్లిక్ చేయాల్సిన అవసరం లేదు లేదా మీ PIN ఎంటర్ చేయాల్సిన అవసరం లేదు.',
            explanation: 'మీరు డబ్బు పంపేటప్పుడు మాత్రమే యాప్‌లు మీ PIN అడుగుతాయి. ఎవరైనా డబ్బు పొందడానికి "Pay" క్లిక్ చేయమని చెబితే, అది ఖచ్చితంగా మోసం.'
          }
        ]
      },
      kannada: {
        title: 'ಅನಿರೀಕ್ಷಿತ ಬಹುಮಾನ',
        saathiIntro: 'ನಿಮ್ಮ UPI ಆಪ್‌ನಲ್ಲಿ ಒಂದು ನೋಟಿಫಿಕೇಶನ್ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಯಾರೋ ನಿಮಗೆ ₹5,000 ಬಹುಮಾನವನ್ನು "ಕಳುಹಿಸುತ್ತಿದ್ದಾರೆ".',
        saathiPrompt: 'ಅಲ್ಲಿ "ಪಡೆಯಲು ಪೇ (Pay) ಕ್ಲಿಕ್ ಮಾಡಿ" ಎಂದು ಇದೆ. ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?',
        content: {
          amount: '5000',
          note: 'ಲಕ್ಕಿ ವಿಜೇತರಿಗಾಗಿ ಬಹುಮಾನದ ಹಣ',
          sender: 'LuckyDraw_Rewards'
        },
        successMessage: 'ಅದ್ಭುತ!',
        successExplanation: 'ನಿಮ್ಮ ಹಣವನ್ನು ಉಳಿಸಿಕೊಂಡಿದ್ದೀರಿ! ವಂಚಕರು ಹೆಚ್ಚಾಗಿ ನಿಮಗೆ ಹಣ ನೀಡುವಂತೆ ಕಾಣುವ "Request" ಲಿಂಕ್‌ಗಳನ್ನು ಕಳುಹಿಸುತ್ತಾರೆ, ಆದರೆ ವಾಸ್ತವವಾಗಿ ಅವು ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಪಡೆಯಲು ಇರುತ್ತವೆ.',
        wrongActions: [
          {
            id: 'click-pay',
            alertTitle: '⚠️ ಆರ್ಥಿಕ ವಂಚನೆಯ ಎಚ್ಚರಿಕೆ!',
            alertMessage: 'ಹಣವನ್ನು ಪಡೆಯಲು ನೀವು ಎಂದಿಗೂ "Pay" ಕ್ಲಿಕ್ ಮಾಡುವ ಅಥವಾ ನಿಮ್ಮ PIN ಅನ್ನು ನಮೂದಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.',
            explanation: 'ನೀವು ಹಣವನ್ನು ಕಳುಹಿಸುವಾಗ ಮಾತ್ರ ಆಪ್‌ಗಳು ನಿಮ್ಮ PIN ಕೇಳುತ್ತವೆ. ಯಾರಾದರೂ ಹಣ ಪಡೆಯಲು "Pay" ಕ್ಲಿಕ್ ಮಾಡಲು ಹೇಳಿದರೆ, ಅದು ವಂಚನೆ.'
          }
        ]
      }
    }
  },
  // --- COMPUTER BASICS ---
  {
    id: 'folder-create',
    title: 'Organizing Files',
    category: 'basics',
    type: 'desktop',
    saathiIntro: 'Your desktop is getting messy with many photos. We need to organize them.',
    saathiPrompt: 'Show me how you would create a new folder to put these photos in.',
    content: {
      files: ['photo1.jpg', 'photo2.jpg', 'doc1.pdf'],
      contextMenuVisible: false
    },
    correctAction: 'right-click-new-folder',
    wrongActions: [
      {
        id: 'double-click-file',
        alertTitle: 'Wrong Action',
        alertMessage: 'Double-clicking opens a file, it doesn\'t create a folder.',
        explanation: 'To create a folder, you usually right-click on an empty space and select "New" > "Folder".'
      }
    ],
    successMessage: 'Well done!',
    successExplanation: 'Creating folders is the first step to keeping your digital life organized.',
    translations: {
      hindi: {
        title: 'फाइलों को व्यवस्थित करना',
        saathiIntro: 'आपका डेस्कटॉप बहुत सारे फोटो के साथ बिखरा हुआ लग रहा है। हमें इन्हें व्यवस्थित करने की आवश्यकता है।',
        saathiPrompt: 'मुझे दिखाएं कि आप इन फोटो को रखने के लिए एक नया फोल्डर कैसे बनाएंगे।',
        successMessage: 'बहुत अच्छा!',
        successExplanation: 'फोल्डर बनाना आपके डिजिटल जीवन को व्यवस्थित रखने की दिशा में पहला कदम है।',
        wrongActions: [
          {
            id: 'double-click-file',
            alertTitle: 'गलत कार्रवाई',
            alertMessage: 'फाइल पर डबल-क्लिक करने से वह खुल जाती है, इससे फोल्डर नहीं बनता।',
            explanation: 'फोल्डर बनाने के लिए, आप आमतौर पर खाली जगह पर राइट-क्लिक करते हैं और "New" > "Folder" चुनते हैं।'
          }
        ]
      },
      tamil: {
        title: 'கோப்புகளை ஒழுங்கமைத்தல்',
        saathiIntro: 'உங்கள் டெஸ்க்டாப் பல புகைப்படங்களால் குழப்பமாக உள்ளது. அவற்றை நாம் ஒழுங்கமைக்க வேண்டும்.',
        saathiPrompt: 'இந்த புகைப்படங்களை வைக்க ஒரு புதிய கோப்புறையை (Folder) எப்படி உருவாக்குவீர்கள் என்று எனக்குக் காட்டுங்கள்.',
        successMessage: 'மிகவும் நன்று!',
        successExplanation: 'கோப்புறைகளை உருவாக்குவது உங்கள் டிஜிட்டல் வாழ்க்கையை ஒழுங்கமைத்து வைப்பதற்கான முதல் படியாகும்.',
        wrongActions: [
          {
            id: 'double-click-file',
            alertTitle: 'தவறான செயல்',
            alertMessage: 'கோப்பை இருமுறை கிளிக் செய்தால் அது திறக்கும், கோப்புறை உருவாகாது.',
            explanation: 'கோப்புறையை உருவாக்க, பொதுவாக ஒரு வெற்று இடத்தில் ரைட்-क्ளிக் (Right-Click) செய்து "New" > "Folder" என்பதைத் தேர்ந்தெடுக்க வேண்டும்.'
          }
        ]
      }
    }
  },
  {
    id: 'copy-paste',
    title: 'The Magic of Copying',
    category: 'basics',
    type: 'folder',
    saathiIntro: 'You have a file in "Documents" that you also want in your "Work" folder.',
    saathiPrompt: 'How would you copy this file without deleting it from the original place?',
    content: {
      selectedFile: 'resume.docx',
      source: 'Documents',
      target: 'Work'
    },
    correctAction: 'copy-command',
    wrongActions: [
      {
        id: 'delete-command',
        alertTitle: 'Careful!',
        alertMessage: 'Deleting will remove the file permanently.',
        explanation: 'Use the "Copy" command to duplicate a file, then use "Paste" in the destination folder.'
      }
    ],
    successMessage: 'Excellent!',
    successExplanation: 'Copying allows you to have the same information in multiple places safely.',
    translations: {
      hindi: {
        title: 'कॉपी करने का जादू',
        saathiIntro: 'आपके पास "डॉक्यूमेंट्स" में एक फाइल है जिसे आप अपने "वर्क" फोल्डर में भी चाहते हैं।',
        saathiPrompt: 'आप इस फाइल को उसकी मूल जगह से हटाए बिना उसकी दूसरी कॉपी कैसे बनाएंगे?',
        successMessage: 'बहुत बढ़िया!',
        successExplanation: 'कॉपी करने से आप एक ही जानकारी को सुरक्षित रूप से कई जगहों पर रख सकते हैं।',
        wrongActions: [
          {
            id: 'delete-command',
            alertTitle: 'सावधान!',
            alertMessage: 'डिलीट (Delete) करने से फाइल स्थायी रूप से हट जाएगी।',
            explanation: 'फाइल की दूसरी कॉपी बनाने के लिए "Copy" कमांड का उपयोग करें, फिर अपने फोल्डर में "Paste" करें।'
          }
        ]
      },
      tamil: {
        title: 'நகல் எடுப்பதின் விந்தை (Copying)',
        saathiIntro: '"Documents" பிரிவில் உள்ள ஒரு கோப்பு உங்கள் "Work" கோப்புறைக்கும் தேவைப்படுகிறது.',
        saathiPrompt: 'அசல் கோப்பை நீக்காமல் அதன் நகலை எப்படி உருவாக்குவீர்கள்?',
        successMessage: 'அற்புதம்!',
        successExplanation: 'நகல் எடுப்பது (Copying) ஒரே தகவலைப் பாதுகாப்பாகப் பல இடங்களில் வைத்திருக்க உதவுகிறது.',
        wrongActions: [
          {
            id: 'delete-command',
            alertTitle: 'கவனம்!',
            alertMessage: 'நீக்குவது (Deleting) கோப்பை நிரந்தரமாக அழித்துவிடும்.',
            explanation: 'கோப்பை நகலெடுக்க "Copy" கட்டளையைப் பயன்படுத்தவும், பின்னர் சேர வேண்டிய இடத்தில் "Paste" செய்யவும்.'
          }
        ]
      },
      telugu: {
        title: 'కాపీ చేసే మ్యాజిక్',
        saathiIntro: '"Documents" లో ఉన్న ఒక ఫైల్ మీకు "Work" ఫోల్డర్‌లో కూడా కావాలి.',
        saathiPrompt: 'అసలు చోట నుండి ఫైల్ తొలగించకుండా దానిని ఎలా కాపీ చేస్తారు?',
        successMessage: 'అద్భుతం!',
        successExplanation: 'కాపీ చేయడం ద్వారా మీరు ఒకే సమాచారాన్ని సురక్షితంగా పలు చోట్ల ఉంచుకోవచ్చు.',
        wrongActions: [
          {
            id: 'delete-command',
            alertTitle: 'జాగ్రత్త!',
            alertMessage: 'డిలీట్ చేస్తే ఫైల్ శాశ్వతంగా తొలగిపోతుంది.',
            explanation: 'ఫైల్ కాపీ చేయడానికి "Copy" కమాండ్ ఉపయోగించండి, తర్వాత ఫోల్డర్‌లో "Paste" చేయండి.'
          }
        ]
      },
      kannada: {
        title: 'ಕಾಪಿ ಮಾಡುವ ಮ್ಯಾಜಿಕ್',
        saathiIntro: '"Documents" ನಲ್ಲಿರುವ ಒಂದು ಫೈಲ್ ನಿಮಗೆ "Work" ಫೋಲ್ಡರ್‌ನಲ್ಲಿಯೂ ಬೇಕಾಗಿದೆ.',
        saathiPrompt: 'ಅಸಲು ಜಾಗದಿಂದ ಫೈಲ್ ಅಳಿಸದೆ ಅದನ್ನು ಹೇಗೆ ಕಾಪಿ ಮಾಡುತ್ತೀರಿ?',
        successMessage: 'ಅದ್ಭುತ!',
        successExplanation: 'ಕಾಪಿ ಮಾಡುವುದರಿಂದ ನೀವು ಒಂದೇ ಮಾಹಿತಿಯನ್ನು ಹಲವು ಕಡೆ ಸುರಕ್ಷಿತವಾಗಿ ಇಡಬಹುದು.',
        wrongActions: [
          {
            id: 'delete-command',
            alertTitle: 'ಎಚ್ಚರ!',
            alertMessage: 'ಡಿಲೀಟ್ ಮಾಡಿದರೆ ಫೈಲ್ ಶಾಶ್ವತವಾಗಿ ಅಳಿಸಲ್ಪಡುತ್ತದೆ.',
            explanation: 'ಫೈಲ್ ಕಾಪಿ ಮಾಡಲು "Copy" ಕಮಾಂಡ್ ಬಳಸಿ, ನಂತರ ಫೋಲ್ಡರ್‌ನಲ್ಲಿ "Paste" ಮಾಡಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'phishing-email',
    title: 'Urgent Account Update',
    category: 'security',
    type: 'email',
    saathiIntro: 'Abhi, you received an email that looks like it\'s from Amazon. It says your order cannot be shipped.',
    saathiPrompt: 'It has a link to "Verify Account". Should you click it?',
    content: {
      from: 'Amazon Security <security@amazon-updates-portal.net>',
      subject: 'Action Required: Your Order #492-123 is on hold',
      body: 'Your payment failed. Please click below to update your billing info or your order will be cancelled.'
    },
    correctAction: 'ignore-link',
    wrongActions: [
      {
        id: 'click-link',
        alertTitle: '⚠️ Phishing Attempt!',
        alertMessage: 'Scammers use fake emails to steal your credit card details.',
        explanation: 'Check the sender email address carefully. Official companies use their real domains (amazon.com, not amazon-updates-portal.net).'
      }
    ],
    successMessage: 'Great catch!',
    successExplanation: 'Always check the sender\'s email address before clicking any links in emails.',
    translations: {
      hindi: {
        title: 'अकाउंट अपडेट की धोखाधड़ी',
        saathiIntro: 'अभि, आपको एक ईमेल मिला है जो ऐसा लग रहा है जैसे अमेज़न (Amazon) से आया हो। इसमें लिखा है कि आपका ऑर्डर भेजा नहीं जा सकता।',
        saathiPrompt: 'इसमें "अकाउंट वेरिफाई करें" का लिंक है। क्या आपको इस पर क्लिक करना चाहिए?',
        content: {
          from: 'अमेज़न सिक्योरिटी <security@amazon-updates-portal.net>',
          subject: 'कार्रवाई आवश्यक: आपका ऑर्डर #492-123 होल्ड पर है',
          body: 'आपका भुगतान विफल हो गया है। कृपया अपनी बिलिंग जानकारी अपडेट करने के लिए नीचे क्लिक करें अन्यथा आपका ऑर्डर रद्द कर दिया जाएगा।'
        },
        successMessage: 'सही पहचान!',
        successExplanation: 'ईमेल में किसी भी लिंक पर क्लिक करने से पहले हमेशा भेजने वाले का ईमेल एड्रेस चेक करें।',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ फिशिंग की कोशिश!',
            alertMessage: 'जालसाज आपके क्रेडिट कार्ड की जानकारी चुराने के लिए फर्जी ईमेल का उपयोग करते हैं।',
            explanation: 'भेजने वाले का ईमेल एड्रेस ध्यान से देखें। आधिकारिक कंपनियां अपने असली डोमेन (amazon.com) का उपयोग करती हैं, न कि amazon-updates-portal.net जैसे फर्जी डोमेन का।'
          }
        ]
      },
      tamil: {
        title: 'அவசர கணக்கு புதுப்பித்தல் மோசடி',
        saathiIntro: 'அபி, அமேசானிலிருந்து (Amazon) வந்தது போல ஒரு மின்னஞ்சல் உங்களுக்கு வந்துள்ளது. உங்கள் ஆர்டரை அனுப்ப முடியாது என்று அதில் உள்ளது.',
        saathiPrompt: 'அதில் "கணக்கைச் சரிபார்க்கவும்" (Verify Account) என்ற ஒரு லிங்க் உள்ளது. அதை கிளிக் செய்வீர்களா?',
        content: {
          from: 'அமேசான் பாதுகாப்பு <security@amazon-updates-portal.net>',
          subject: 'முக்கிய அறிவிப்பு: உங்கள் ஆர்டர் #492-123 நிறுத்தி வைக்கப்பட்டுள்ளது',
          body: 'உங்கள் பணம் செலுத்தும் முறை தோல்வியடைந்தது. ஆர்டர் ரத்து செய்யப்படுவதைத் தவிர்க்க கீழே உள்ள லிங்கை கிளிக் செய்யவும்.'
        },
        successMessage: 'சிறப்பான செயல்!',
        successExplanation: 'மின்னஞ்சல்களில் உள்ள எந்தவொரு லிங்கையும் கிளிக் செய்வதற்கு முன்பு மின்னஞ்சல் முகவரியைச் சரிபார்ப்பது அவசியம்.',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ ஃபிஷிங் (Phishing) முயற்சி!',
            alertMessage: 'மோசடி செய்பவர்கள் உங்கள் கிரெடிட் கார்டு தகவல்களைத் திருட போலி மின்னஞ்சல்களைப் பயன்படுத்துகின்றனர்.',
            explanation: 'மின்னஞ்சல் முகவரியைக் கவனமாகப் பார்க்கவும். அதிகாரப்பூர்வ நிறுவனங்கள் அவற்றின் உண்மையான இணையதள முகவரிகளையே (amazon.com) பயன்படுத்தும்.'
          }
        ]
      },
      telugu: {
        title: 'అకౌంట్ అప్‌డేట్ మోసం',
        saathiIntro: 'అభి, మీకు అమెజాన్ నుండి వచ్చినట్లుగా ఒక ఈమెయిల్ వచ్చింది. మీ ఆర్డర్ పంపడం సాధ్యం కాదని అందులో ఉంది.',
        saathiPrompt: '"అకౌంట్ వెరిఫై చేయండి" అని ఒక లింక్ ఉంది. మీరు దానిపై క్లిక్ చేస్తారా?',
        content: {
          from: 'అమెజాన్ సెక్యూరిటీ <security@amazon-updates-portal.net>',
          subject: 'చర్య తీసుకోవాలి: మీ ఆర్డర్ #492-123 హోల్డ్ లో ఉంది',
          body: 'మీ పేమెంట్ విఫలమైంది. దయచేసి మీ బిల్లింగ్ సమాచారాన్ని అప్‌డేట్ చేయడానికి కింద క్లిక్ చేయండి లేదంటే మీ ఆర్డర్ రద్దు చేయబడుతుంది.'
        },
        successMessage: 'మంచి గుర్తింపు!',
        successExplanation: 'ఈమెయిల్‌లో ఏవైనా లింక్‌లను క్లిక్ చేసే ముందు ఎప్పుడూ పంపినవారి ఈమెయిల్ అడ్రస్‌ను తనిఖీ చేయండి.',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ ఫిషింగ్ ప్రయత్నం!',
            alertMessage: 'మోసగాళ్లు మీ క్రెడిట్ కార్డ్ వివరాలను దొంగిలించడానికి నకిలీ ఈమెయిల్‌లను ఉపయోగిస్తారు.',
            explanation: 'పంపినవారి ఈమెయిల్ అడ్రస్‌ను జాగ్రత్తగా గమనించండి. అధికారిక కంపెనీలు తమ అసలైన డొమైన్‌లను (amazon.com) ఉపయోగిస్తాయి.'
          }
        ]
      },
      kannada: {
        title: 'ಖಾತೆ ಅಪ್‌ಡೇಟ್ ವಂಚನೆ',
        saathiIntro: 'ಅಭಿ, ನಿಮಗೆ ಅಮೆಜಾನ್‌ನಿಂದ ಬಂದಂತೆ ತೋರುವ ಇಮೇಲ್ ಬಂದಿದೆ. ನಿಮ್ಮ ಆರ್ಡರ್ ಕಳುಹಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಅದರಲ್ಲಿ ತಿಳಿಸಲಾಗಿದೆ.',
        saathiPrompt: '"ಖಾತೆ ಪರಿಶೀಲಿಸಿ" ಎಂದು ಒಂದು ಲಿಂಕ್ ಇದೆ. ನೀವು ಅದರ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುತ್ತೀರಾ?',
        content: {
          from: 'ಅಮೆಜಾನ್ ಸೆಕ್ಯೂರಿಟಿ <security@amazon-updates-portal.net>',
          subject: 'ಕ್ರಮ ಕೈಗೊಳ್ಳಿ: ನಿಮ್ಮ ಆರ್ಡರ್ #492-123 ತಡೆಹಿಡಿಯಲಾಗಿದೆ',
          body: 'ನಿಮ್ಮ ಪಾವತಿ ವಿಫಲವಾಗಿದೆ. ನಿಮ್ಮ ಬಿಲ್ಲಿಂಗ್ ಮಾಹಿತಿಯನ್ನು ನವೀಕರಿಸಲು ದಯವಿಟ್ಟು ಕೆಳಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಆರ್ಡರ್ ರದ್ದುಗೊಳ್ಳುತ್ತದೆ.'
        },
        successMessage: 'ಉತ್ತಮ ಕೆಲಸ!',
        successExplanation: 'ಇಮೇಲ್‌ಗಳಲ್ಲಿನ ಯಾವುದೇ ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡುವ ಮೊದಲು ಯಾವಾಗಲೂ ಕಳುಹಿಸುವವರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪರೀಕ್ಷಿಸಿ.',
        wrongActions: [
          {
            id: 'click-link',
            alertTitle: '⚠️ ಫಿಶಿಂಗ್ ಪ್ರಯತ್ನ!',
            alertMessage: 'ವಂಚಕರು ನಿಮ್ಮ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ವಿವರಗಳನ್ನು ಕದಿಯಲು ನಕಲಿ ಇಮೇಲ್‌ಗಳನ್ನು ಬಳಸುತ್ತಾರೆ.',
            explanation: 'ಕಳುಹಿಸುವವರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಗಮನಿಸಿ. ಅಧಿಕೃತ ಕಂಪನಿಗಳು ತಮ್ಮ ಅಸಲಿ ಡೊಮೇನ್ (amazon.com) ಬಳಸುತ್ತವೆ.'
          }
        ]
      }
    }
  },
  {
    id: 'fake-app',
    title: 'The "Cleaner" App',
    category: 'security',
    type: 'app-install',
    saathiIntro: 'A popup on a website says your phone is infected with 15 viruses and recommends "Fast Cleaner Pro".',
    saathiPrompt: 'Should you install this app to clean your phone?',
    content: {
      appName: 'Fast Cleaner Pro',
      warning: '15 VIRUSES DETECTED!',
      source: 'External Website'
    },
    correctAction: 'ignore-app',
    wrongActions: [
      {
        id: 'install-app',
        alertTitle: '⚠️ Malware Warning!',
        alertMessage: 'Fake "cleaner" apps often contain spy software or viruses themselves.',
        explanation: 'Never install apps from website popups. Always use official stores like Google Play Store or Apple App Store.'
      }
    ],
    successMessage: 'Safe choice!',
    successExplanation: 'Official virus alerts only come from your phone\'s built-in security, never from a random website.',
    translations: {
      hindi: {
        title: '"क्लीनर" ऐप का जाल',
        saathiIntro: 'एक वेबसाइट पर एक पॉपअप कहता है कि आपके फोन में 15 वायरस हैं और "Fast Cleaner Pro" इंस्टॉल करने की सलाह देता है।',
        saathiPrompt: 'क्या आपको अपने फोन को साफ करने के लिए इस ऐप को इंस्टॉल करना चाहिए?',
        content: {
          appName: 'Fast Cleaner Pro',
          warning: '15 वायरस मिले!',
          source: 'अपरिचित वेबसाइट'
        },
        successMessage: 'सुरक्षित विकल्प!',
        successExplanation: 'आधिकारिक वायरस अलर्ट केवल आपके फोन की इन-बिल्ट सुरक्षा से आते हैं, किसी रैंडम वेबसाइट से कभी नहीं।',
        wrongActions: [
          {
            id: 'install-app',
            alertTitle: '⚠️ मालवेयर की चेतावनी!',
            alertMessage: 'फर्जी "क्लीनर" ऐप्स में अक्सर जासूसी करने वाले सॉफ्टवेयर या वायरस होते हैं।',
            explanation: 'वेबसाइट पॉपअप से कभी भी ऐप इंस्टॉल न करें। हमेशा गूगल प्ले स्टोर या एप्पल ऐप स्टोर जैसे आधिकारिक स्टोर का उपयोग करें।'
          }
        ]
      },
      tamil: {
        title: '"க்ளீனர்" (Cleaner) ஆப் வலை',
        saathiIntro: 'ஒரு இணையதளத்தில் உங்கள் போனில் 15 வைரஸ்கள் இருப்பதாக ஒரு பாப்-அப் (Popup) செய்தி வருகிறது, மேலும் "Fast Cleaner Pro" ஆப்பை இன்ஸ்டால் செய்ய பரிந்துரைக்கிறது.',
        saathiPrompt: 'உங்கள் போனை சுத்தம் செய்ய இந்த ஆப்பை இன்ஸ்டால் செய்வீர்களா?',
        content: {
          appName: 'Fast Cleaner Pro',
          warning: '15 வைரஸ்கள் கண்டறியப்பட்டுள்ளன!',
          source: 'தெரியாத இணையதளம்'
        },
        successMessage: 'பாதுகாப்பான முடிவு!',
        successExplanation: 'அதிகாரப்பூர்வ வைரஸ் எச்சரிக்கைகள் எப்போதும் உங்கள் போனின் பாதுகாப்பு அமைப்பிலிருந்து மட்டுமே வரும், சாதாரண இணையதளங்களிலிருந்து வராது.',
        wrongActions: [
          {
            id: 'install-app',
            alertTitle: '⚠️ மால்வேர் (Malware) எச்சரிக்கை!',
            alertMessage: 'போலி "க்ளீனர்" ஆப்களில் பெரும்பாலும் உளவு பார்க்கும் மென்பொருட்கள் அல்லது வைரஸ்கள் இருக்கலாம்.',
            explanation: 'இணையதள பாப்-அப்களில் இருந்து ஒருபோதும் ஆப்களை இன்ஸ்டால் செய்யாதீர்கள். எப்போதும் கூகுள் பிளே ஸ்டோர் போன்ற அதிகாரப்பூர்வ ஸ்டோர்களைப் பயன்படுத்தவும்.'
          }
        ]
      },
      telugu: {
        title: '"క్లీనర్" యాప్ ఉచ్చు',
        saathiIntro: 'మీ ఫోన్‌లో 15 వైరస్‌లు ఉన్నాయని ఒక వెబ్‌సైట్ పాపప్ చెప్తోంది మరియు "Fast Cleaner Pro"ని ఇన్‌స్టాల్ చేయమని సిఫార్సు చేస్తోంది.',
        saathiPrompt: 'మీ ఫోన్‌ను క్లీన్ చేయడానికి మీరు ఈ యాప్‌ను ఇన్‌స్టాల్ చేస్తారా?',
        content: {
          appName: 'Fast Cleaner Pro',
          warning: '15 వైరస్‌లు కనుగొనబడ్డాయి!',
          source: 'తెలియని వెబ్‌సైట్'
        },
        successMessage: 'సురక్షితమైన నిర్ణయం!',
        successExplanation: 'అధికారిక వైరస్ హెచ్చరికలు మీ ఫోన్ లోని సెక్యూరిటీ సిస్టమ్ నుండి మాత్రమే వస్తాయి, తెలియని వెబ్‌సైట్‌ల నుండి రావు.',
        wrongActions: [
          {
            id: 'install-app',
            alertTitle: '⚠️ మాల్వేర్ హెచ్చరిక!',
            alertMessage: 'నకిలీ "క్లీనర్" యాప్‌లలో తరచుగా స్పైవేర్ లేదా వైరస్‌లు ఉంటాయి.',
            explanation: 'వెబ్‌సైట్ పాపప్‌ల నుండి యాప్‌లను ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు. ఎల్లప్పుడూ గూగుల్ ప్లే స్టోర్ లేదా ఆపిల్ యాప్ స్టోర్ వంటి అధికారిక స్టోర్‌లను ఉపయోగించండి.'
          }
        ]
      },
      kannada: {
        title: '"ಕ್ಲೀನರ್" ಆಪ್ ಬಲೆ',
        saathiIntro: 'ಒಂದು ವೆಬ್‌ಸೈಟ್ ಪಾಪ್‌ಅಪ್ ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲಿ 15 ವೈರಸ್‌ಗಳಿವೆ ಎಂದು ಹೇಳುತ್ತದೆ ಮತ್ತು "Fast Cleaner Pro" ಅನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ಸೂಚಿಸುತ್ತದೆ.',
        saathiPrompt: 'ನಿಮ್ಮ ಫೋನ್ ಅನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಲು ನೀವು ಈ ಆಪ್ ಅನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುತ್ತೀರಾ?',
        content: {
          appName: 'Fast Cleaner Pro',
          warning: '15 ವೈರಸ್‌ಗಳು ಪತ್ತೆಯಾಗಿವೆ!',
          source: 'ಅಪರಿಚಿತ ವೆಬ್‌ಸೈಟ್'
        },
        successMessage: 'ಸುರಕ್ಷಿತ ಆಯ್ಕೆ!',
        successExplanation: 'ಅಧಿಕೃತ ವೈರಸ್ ಎಚ್ಚರಿಕೆಗಳು ಯಾವಾಗಲೂ ನಿಮ್ಮ ಫೋನ್‌ನ ಬಿಲ್ಟ್-ಇನ್ ಭದ್ರತೆಯಿಂದ ಮಾತ್ರ ಬರುತ್ತವೆ, ಯಾವುದೇ ಅಪರಿಚಿತ ವೆಬ್‌ಸೈಟ್‌ನಿಂದಲ್ಲ.',
        wrongActions: [
          {
            id: 'install-app',
            alertTitle: '⚠️ ಮಾಲ್‌ವೇರ್ ಎಚ್ಚರಿಕೆ!',
            alertMessage: 'ನಕಲಿ "ಕ್ಲೀನರ್" ಆಪ್‌ಗಳು ಹೆಚ್ಚಾಗಿ ವೈರಸ್‌ಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ.',
            explanation: 'ವೆಬ್‌ಸೈಟ್ ಪಾಪ್‌ಅಪ್‌ಗಳಿಂದ ಎಂದಿಗೂ ಆಪ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ. ಯಾವಾಗಲೂ ಅಧಿಕೃತ ಸ್ಟೋರ್‌ಗಳನ್ನೇ ಬಳಸಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'public-wifi',
    title: 'Free Public Wi-Fi',
    category: 'security',
    type: 'browser',
    saathiIntro: 'Abhi, you are at a coffee shop and see an open Wi-Fi network named "FREE_WIFI_NO_PASSWORD".',
    saathiPrompt: 'Is it safe to log into your bank account while connected to this Wi-Fi?',
    content: {
      wifiName: 'FREE_WIFI_NO_PASSWORD',
      task: 'Check Bank Balance'
    },
    correctAction: 'dont-use-wifi',
    wrongActions: [
      {
        id: 'use-wifi',
        alertTitle: '⚠️ Privacy Risk!',
        alertMessage: 'Public Wi-Fi networks can be monitored by hackers to steal your login data.',
        explanation: 'Never perform sensitive tasks like banking or shopping on public, unencrypted Wi-Fi. Use your mobile data instead.'
      }
    ],
    successMessage: 'Wisely done!',
    successExplanation: 'Wait until you are home or use a VPN on public Wi-Fi for sensitive activities.',
    translations: {
      hindi: {
        title: 'फ्री पब्लिक वाई-फाई',
        saathiIntro: 'अभि, आप एक कॉफी शॉप में हैं और आपको "FREE_WIFI_NO_PASSWORD" नाम का एक ओपन वाई-फाई नेटवर्क दिखता है।',
        saathiPrompt: 'क्या इस वाई-फाई से कनेक्ट होने के दौरान अपने बैंक अकाउंट में लॉग इन करना सुरक्षित है?',
        content: {
          wifiName: 'FREE_WIFI_NO_PASSWORD',
          task: 'बैंक बैलेंस चेक करें'
        },
        successMessage: 'समझदारी भरा फैसला!',
        successExplanation: 'संवेदनशील गतिविधियों (जैसे बैंकिंग) के लिए घर जाने तक प्रतीक्षा करें या पब्लिक वाई-फाई पर VPN का उपयोग करें।',
        wrongActions: [
          {
            id: 'use-wifi',
            alertTitle: '⚠️ प्राइवेसी का खतरा!',
            alertMessage: 'पब्लिक वाई-फाई नेटवर्क की हैकर्स द्वारा निगरानी की जा सकती है ताकि आपका लॉगिन डेटा चुराया जा सके।',
            explanation: 'पब्लिक अनएन्क्रिप्टेड वाई-फाई पर कभी भी बैंकिंग या शॉपिंग जैसे संवेदनशील काम न करें। इसके बजाय अपने मोबाइल डेटा का उपयोग करें।'
          }
        ]
      },
      tamil: {
        title: 'இலவச பொது வைஃபை (Wi-Fi)',
        saathiIntro: 'அபி, நீங்கள் ஒரு காபி ஷாப்பில் இருக்கிறீர்கள், அங்கு "FREE_WIFI_NO_PASSWORD" என்ற பெயரில் ஒரு திறந்த வைஃபை நெட்வொர்க்கைக் காண்கிறீர்கள்.',
        saathiPrompt: 'இந்த வைஃபை இணைப்பில் இருக்கும்போது உங்கள் வங்கி கணக்கில் லாக்-இன் செய்வது பாதுகாப்பானதா?',
        content: {
          wifiName: 'FREE_WIFI_NO_PASSWORD',
          task: 'வங்கி இருப்பைச் சரிபார்க்கவும்'
        },
        successMessage: 'விவேகமான முடிவு!',
        successExplanation: 'முக்கியமான வேலைகளுக்கு உங்கள் வீட்டு வைஃபை அல்லது மொபைல் டேட்டாவைப் பயன்படுத்துவதே சிறந்தது.',
        wrongActions: [
          {
            id: 'use-wifi',
            alertTitle: '⚠️ தனியுரிமை ஆபத்து!',
            alertMessage: 'பொது வைஃபை நெட்வொர்க்குகளை ஹேக்கர்கள் கண்காணித்து உங்கள் தகவல்களைத் திருட வாய்ப்புள்ளது.',
            explanation: 'வங்கி பரிவர்த்தனைகள் அல்லது ஆன்லைன் ஷாப்பிங் போன்ற முக்கியமான வேலைகளுக்குப் பொது வைஃபையைப் பயன்படுத்தாதீர்கள்.'
          }
        ]
      },
      telugu: {
        title: 'ఉచిత పబ్లిక్ వై-ఫై',
        saathiIntro: 'అభి, మీరు ఒక కాఫీ షాప్‌లో ఉన్నారు. అక్కడ "FREE_WIFI_NO_PASSWORD" అనే పేరుతో ఒక ఓపెన్ వై-ఫై నెట్‌వర్క్ కనిపిస్తుంది.',
        saathiPrompt: 'ఈ వై-ఫై కి కనెక్ట్ అయి ఉన్నప్పుడు మీ బ్యాంక్ అకౌంట్‌లోకి లాగిన్ అవ్వడం సురక్షితమేనా?',
        content: {
          wifiName: 'FREE_WIFI_NO_PASSWORD',
          task: 'బ్యాంక్ బ్యాలెన్స్ తనిఖీ చేయండి'
        },
        successMessage: 'తెలివైన నిర్ణయం!',
        successExplanation: 'బ్యాంకింగ్ వంటి పనుల కోసం ఇంటికి వెళ్ళేవరకు ఆగండి లేదా మీ మొబైల్ డేటాను ఉపయోగించండి.',
        wrongActions: [
          {
            id: 'use-wifi',
            alertTitle: '⚠️ గోప్యత ప్రమాదం!',
            alertMessage: 'పబ్లిక్ వై-ఫై నెట్‌వర్క్‌లను హ్యాకర్లు మీ లాగిన్ సమాచారాన్ని దొంగిలించడానికి పర్యవేక్షించగలరు.',
            explanation: 'పబ్లిక్ వై-ఫై లో బ్యాంకింగ్ లేదా షాపింగ్ వంటి పనులు చేయవద్దు. మీ మొబైల్ డేటాను ఉపయోగించడం సురక్షితం.'
          }
        ]
      },
      kannada: {
        title: 'ಉಚಿತ ಪಬ್ಲಿಕ್ ವೈ-ಫೈ',
        saathiIntro: 'ಅಭಿ, ನೀವು ಒಂದು ಕಾಫಿ ಶಾಪ್‌ನಲ್ಲಿದ್ದೀರಿ. ಅಲ್ಲಿ "FREE_WIFI_NO_PASSWORD" ಹೆಸರಿನ ಓಪನ್ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್ ಕಾಣಿಸುತ್ತದೆ.',
        saathiPrompt: 'ಈ ವೈ-ಫೈಗೆ ಕನೆಕ್ಟ್ ಆಗಿರುವಾಗ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಲಾಗಿನ್ ಆಗುವುದು ಸುರಕ್ಷಿತವೇ?',
        content: {
          wifiName: 'FREE_WIFI_NO_PASSWORD',
          task: 'ಬ್ಯಾಂಕ್ ಬ್ಯಾಲೆನ್ಸ್ ಪರೀಕ್ಷಿಸಿ'
        },
        successMessage: 'ವಿವೇಕಯುತ ನಿರ್ಧಾರ!',
        successExplanation: 'ಬ್ಯಾಂಕಿಂಗ್‌ನಂತಹ ಕೆಲಸಗಳಿಗೆ ಮನೆಗೆ ಹೋಗುವವರೆಗೆ ಕಾಯಿರಿ ಅಥವಾ ನಿಮ್ಮ ಮೊಬೈಲ್ ಡೇಟಾವನ್ನು ಬಳಸಿ.',
        wrongActions: [
          {
            id: 'use-wifi',
            alertTitle: '⚠️ ಗೌಪ್ಯತೆ ಅಪಾಯ!',
            alertMessage: 'ಪಬ್ಲಿಕ್ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್‌ಗಳನ್ನು ಹ್ಯಾಕರ್‌ಗಳು ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಕದಿಯಲು ಬಳಸಬಹುದು.',
            explanation: 'ಪಬ್ಲಿಕ್ ವೈ-ಫೈನಲ್ಲಿ ಬ್ಯಾಂಕಿಂಗ್ ಅಥವಾ ಶಾಪಿಂಗ್ ಮಾಡಬೇಡಿ. ನಿಮ್ಮ ಮೊಬೈಲ್ ಡೇಟಾವನ್ನು ಬಳಸುವುದು ಸುರಕ್ಷಿತ.'
          }
        ]
      }
    }
  },
  {
    id: 'screen-sharing',
    title: 'Remote Support Scam',
    category: 'security',
    type: 'banking',
    saathiIntro: 'A "tech support" person says your computer has a bug and asks you to install "AnyDesk" to let them fix it.',
    saathiPrompt: 'Should you give them remote access to your screen?',
    content: {
      tool: 'AnyDesk / TeamViewer',
      caller: 'Microsoft Support Executive'
    },
    correctAction: 'refuse-access',
    wrongActions: [
      {
        id: 'give-access',
        alertTitle: '⚠️ Identity Theft Risk!',
        alertMessage: 'Remote access gives scammers full control over your files and accounts.',
        explanation: 'Genuine companies like Microsoft or Google never call you to fix your computer. This is a common scam to steal data.'
      }
    ],
    successMessage: 'You\'re safe!',
    successExplanation: 'Never let strangers access your screen or device remotely.',
    translations: {
      hindi: {
        title: 'रिमोट सपोर्ट धोखाधड़ी',
        saathiIntro: 'एक "तकनीकी सहायता" (tech support) व्यक्ति कहता है कि आपके कंप्यूटर में खराबी है और इसे ठीक करने के लिए "AnyDesk" इंस्टॉल करने के लिए कहता है।',
        saathiPrompt: 'क्या आपको उन्हें अपनी स्क्रीन का रिमोट एक्सेस देना चाहिए?',
        content: {
          tool: 'AnyDesk / TeamViewer',
          caller: 'माइक्रोसॉफ्ट सपोर्ट एग्जीक्यूटिव'
        },
        successMessage: 'आप सुरक्षित हैं!',
        successExplanation: 'अजनबियों को कभी भी अपनी स्क्रीन या डिवाइस को रिमोट से एक्सेस न करने दें।',
        wrongActions: [
          {
            id: 'give-access',
            alertTitle: '⚠️ पहचान चोरी का खतरा!',
            alertMessage: 'रिमोट एक्सेस देने से जालसाजों को आपकी फाइलों और अकाउंट्स पर पूरा कंट्रोल मिल जाता है।',
            explanation: 'माइक्रोसॉफ्ट या गूगल जैसी असली कंपनियां आपके कंप्यूटर को ठीक करने के लिए कभी भी आपको कॉल नहीं करती हैं। यह डेटा चुराने का एक आम तरीका है।'
          }
        ]
      },
      tamil: {
        title: 'ரிமோட் சப்போர்ட் (Remote Support) மோசடி',
        saathiIntro: 'தனது கணினியில் ஏதோ கோளாறு இருப்பதாகவும், அதைச் சரிசெய்ய "AnyDesk" ஆப்பை இன்ஸ்டால் செய்யுமாறும் ஒரு "டெக் சப்போர்ட்" நபர் கூறுகிறார்.',
        saathiPrompt: 'உங்கள் திரையை (Screen) அவர்களுக்கு அணுக அனுமதிப்பீர்களா?',
        content: {
          tool: 'AnyDesk / TeamViewer',
          caller: 'மைக்ரோசாஃப்ட் சப்போர்ட் எக்ஸிகியூட்டிவ்'
        },
        successMessage: 'நீங்கள் பாதுகாப்பாக இருக்கிறீர்கள்!',
        successExplanation: 'அந்நியர்கள் உங்கள் திரை அல்லது சாதனத்தை ரிமோட் மூலம் அணுக ஒருபோதும் அனுமதிக்காதீர்கள்.',
        wrongActions: [
          {
            id: 'give-access',
            alertTitle: '⚠️ அடையாள திருட்டு ஆபத்து!',
            alertMessage: 'ரிமோட் அணுகல் உங்கள் கோப்புகள் மற்றும் கணக்குகள் மீது மோசடி செய்பவர்களுக்கு முழு அதிகாரத்தையும் வழங்குகிறது.',
            explanation: 'மைக்ரோசாஃப்ட் அல்லது கூகிள் போன்ற உண்மையான நிறுவனங்கள் உங்கள் கணினியைச் சரிசெய்ய உங்களை ஒருபோதும் அழைக்காது.'
          }
        ]
      },
      telugu: {
        title: 'రిమోట్ సపోర్ట్ మోసం',
        saathiIntro: 'ఒక "టెక్ సపోర్ట్" వ్యక్తి మీ కంప్యూటర్లో బగ్ ఉందని మరియు దానిని సరిచేయడానికి "AnyDesk" ఇన్‌స్టాల్ చేయమని చెప్పారు.',
        saathiPrompt: 'మీరు మీ స్క్రీన్ రిమోట్ యాక్సెస్ వారికి ఇస్తారా?',
        content: {
          tool: 'AnyDesk / TeamViewer',
          caller: 'మైక్రోసాఫ్ట్ సపోర్ట్ ఎగ్జిక్యూటివ్'
        },
        successMessage: 'మీరు సురక్షితంగా ఉన్నారు!',
        successExplanation: 'అపరిచితులను ఎప్పుడూ మీ స్క్రీన్ లేదా పరికరాన్ని రిమోట్‌గా యాక్సెస్ చేయడానికి అనుమతించవద్దు.',
        wrongActions: [
          {
            id: 'give-access',
            alertTitle: '⚠️ గుర్తింపు దొంగతనం ప్రమాదం!',
            alertMessage: 'రిమోట్ యాక్సెస్ మోసగాళ్లకు మీ ఫైల్‌లు మరియు అకౌంట్లపై పూర్తి నియంత్రణను ఇస్తుంది.',
            explanation: 'మైక్రోసాఫ్ట్ లేదా గూగుల్ వంటి అసలైన కంపెనీలు మీ కంప్యూటర్ సరిచేయడానికి మీకు ఎప్పుడూ కాల్ చేయవు.'
          }
        ]
      },
      kannada: {
        title: 'ರಿಮೋಟ್ ಸಪೋರ್ಟ್ ವಂಚನೆ',
        saathiIntro: 'ಒಬ್ಬ "ಟೆಕ್ ಸಪೋರ್ಟ್" ವ್ಯಕ್ತಿ ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ತೊಂದರೆ ಇದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ ಮತ್ತು ಅದನ್ನು ಸರಿಪಡಿಸಲು "AnyDesk" ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ಸೂಚಿಸುತ್ತಾರೆ.',
        saathiPrompt: 'ನಿಮ್ಮ ಸ್ಕ್ರೀನ್ ರಿಮೋಟ್ ಆಕ್ಸೆಸ್ ಅವರಿಗೆ ನೀಡುತ್ತೀರಾ?',
        content: {
          tool: 'AnyDesk / TeamViewer',
          caller: 'ಮೈಕ್ರೋಸಾಫ್ಟ್ ಸಪೋರ್ಟ್ ಎಕ್ಸಿಕ್ಯೂಟಿವ್'
        },
        successMessage: 'ನೀವು ಸುರಕ್ಷಿತವಾಗಿದ್ದೀರಿ!',
        successExplanation: 'ಅಪರಿಚಿತರಿಗೆ ಎಂದಿಗೂ ನಿಮ್ಮ ಸ್ಕ್ರೀನ್ ಅಥವಾ ಸಾಧನದ ರಿಮೋಟ್ ಆಕ್ಸೆಸ್ ನೀಡಬೇಡಿ.',
        wrongActions: [
          {
            id: 'give-access',
            alertTitle: '⚠️ ಗುರುತು ಕಳ್ಳತನದ ಅಪಾಯ!',
            alertMessage: 'ರಿಮೋಟ್ ಆಕ್ಸೆಸ್ ನೀಡಿದರೆ ನಿಮ್ಮ ಫೈಲ್‌ಗಳು ಮತ್ತು ಖಾತೆಗಳ ಮೇಲೆ ವಂಚಕರಿಗೆ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣ ಸಿಗುತ್ತದೆ.',
            explanation: 'ಮೈಕ್ರೋಸಾಫ್ಟ್ ಅಥವಾ ಗೂಗಲ್‌ನಂತಹ ಅಸಲಿ ಕಂಪನಿಗಳು ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್ ಸರಿಪಡಿಸಲು ನಿಮಗೆ ಎಂದಿಗೂ ಕಾಲ್ ಮಾಡುವುದಿಲ್ಲ.'
          }
        ]
      }
    }
  },
  {
    id: 'qr-scam',
    title: 'The QR Code Prize',
    category: 'security',
    type: 'whatsapp',
    saathiIntro: 'You get a QR code on WhatsApp with a message: "Scan this to get ₹2,000 cash reward directly in bank".',
    saathiPrompt: 'Should you scan this code with your payment app?',
    content: {
      message: 'Scan now to claim your cashback!',
      image: 'QR_CODE_IMG'
    },
    correctAction: 'ignore-qr',
    wrongActions: [
      {
        id: 'scan-qr',
        alertTitle: '⚠️ Payment Fraud!',
        alertMessage: 'QR codes are used to SEND money, not to receive it.',
        explanation: 'Scanning a QR code in a payment app often triggers a "Pay" request. You never scan a code to get money from someone else.'
      }
    ],
    successMessage: 'Excellent!',
    successExplanation: 'QR codes are for making payments. Don\'t be fooled by "Scan to Receive" scams.',
    translations: {
      hindi: {
        title: 'QR कोड का इनाम',
        saathiIntro: 'आपको व्हाट्सएप पर एक मैसेज के साथ एक QR कोड मिलता है: "सीधे बैंक में ₹2,000 का नकद इनाम पाने के लिए इसे स्कैन करें"।',
        saathiPrompt: 'क्या आपको अपने पेमेंट ऐप से इस कोड को स्कैन करना चाहिए?',
        content: {
          message: 'अपना कैशबैक पाने के लिए अभी स्कैन करें!',
          image: 'QR_CODE_IMG'
        },
        successMessage: 'बहुत बढ़िया!',
        successExplanation: 'QR कोड भुगतान करने के लिए होते हैं। "प्राप्त करने के लिए स्कैन करें" जैसे झांसे में न आएं।',
        wrongActions: [
          {
            id: 'scan-qr',
            alertTitle: '⚠️ भुगतान धोखाधड़ी!',
            alertMessage: 'QR कोड का उपयोग पैसे भेजने (SEND) के लिए किया जाता है, प्राप्त करने के लिए नहीं।',
            explanation: 'पेमेंट ऐप में QR कोड स्कैन करने अक्सर "पे" (Pay) का अनुरोध बटन दब जाता है। आप बैंक में पैसे पाने के लिए कभी भी कोड स्कैन नहीं करते हैं।'
          }
        ]
      },
      tamil: {
        title: 'க்யூஆர் (QR) கோடு பரிசு',
        saathiIntro: 'வாட்ஸ்அப்பில் உங்களுக்கு ஒரு க்யூஆர் கோடுடன் ஒரு செய்தி வருகிறது: "நேரடியாக வங்கியில் ₹2,000 பணத்தைப் பெற இதை ஸ்கேன் செய்யுங்கள்".',
        saathiPrompt: 'உங்கள் பேமெண்ட் ஆப் மூலம் இந்த கோடை ஸ்கேன் செய்வீர்களா?',
        content: {
          message: 'பணத்தைப் பெற இப்போதே ஸ்கேன் செய்யுங்கள்!',
          image: 'QR_CODE_IMG'
        },
        successMessage: 'அற்புதம்!',
        successExplanation: 'பணம் செலுத்தவே க்யூஆர் கோடுகள் பயன்படுகின்றன. "பணம் பெற ஸ்கேன் செய்யுங்கள்" போன்ற மோசடிகளில் ஏமாற வேண்டாம்.',
        wrongActions: [
          {
            id: 'scan-qr',
            alertTitle: '⚠️ பணப் பரிமாற்ற மோசடி!',
            alertMessage: 'பணம் அனுப்பவே க்யூஆர் கோடுகள் பயன்படுகின்றன, பணத்தைப் பெற அல்ல.',
            explanation: 'ஒரு க்யூஆர் கோடை ஸ்கேன் செய்தால், அது பெரும்பாலும் உங்கள் பணத்தை எடுப்பதற்கான "Pay" கோரிக்கையாகவே இருக்கும்.'
          }
        ]
      },
      telugu: {
        title: 'QR కోడ్ బహుమతి',
        saathiIntro: 'మీకు వాట్సాప్‌లో ఒక QR కోడ్ వచ్చింది: "₹2,000 నగదు బహుమతి నేరుగా బ్యాంక్ లో పొందడానికి దీన్ని స్కాన్ చేయండి".',
        saathiPrompt: 'మీరు మీ పేమెంట్ యాప్ తో దీన్ని స్కాన్ చేస్తారా?',
        content: {
          message: 'క్యాష్‌బ్యాక్ పొందడానికి ఇప్పుడే స్కాన్ చేయండి!',
          image: 'QR_CODE_IMG'
        },
        successMessage: 'అద్భుతం!',
        successExplanation: 'QR కోడ్‌లు కేవలం డబ్బు పంపడానికి మాత్రమే. "డబ్బు పొందడానికి స్కాన్ చేయండి" అనే మోసాల పట్ల జాగ్రత్తగా ఉండండి.',
        wrongActions: [
          {
            id: 'scan-qr',
            alertTitle: '⚠️ పేమెంట్ మోసం!',
            alertMessage: 'QR కోడ్‌లను డబ్బు పంపడానికి ఉపయోగిస్తారు, తీసుకోవడానికి కాదు.',
            explanation: 'పేమెంట్ యాప్‌లో QR కోడ్‌ని స్కాన్ చేయడం ద్వారా మీ అకౌంట్ నుండి డబ్బు కట్ అయ్యే అవకాశం ఉంది. డబ్బు తీసుకోవడానికి స్కాన్ చేయాల్సిన అవసరం లేదు.'
          }
        ]
      },
      kannada: {
        title: 'QR ಕೋಡ್ ಬಹುಮಾನ',
        saathiIntro: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನಿಮಗೆ ಒಂದು QR ಕೋಡ್ ಬಂದಿದೆ: "ನೇರವಾಗಿ ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ₹2,000 ನಗದು ಬಹುಮಾನ ಪಡೆಯಲು ಇದನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ".',
        saathiPrompt: 'ನಿಮ್ಮ ಪಾವತಿ ಆಪ್ ಮೂಲಕ ಈ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತೀರಾ?',
        content: {
          message: 'ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್ ಪಡೆಯಲು ಈಗಲೇ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ!',
          image: 'QR_CODE_IMG'
        },
        successMessage: 'ಅದ್ಭುತ!',
        successExplanation: 'QR ಕೋಡ್‌ಗಳು ಹಣ ಪಾವತಿಸಲು ಮಾತ್ರ ಇರುತ್ತವೆ. "ಹಣ ಪಡೆಯಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ" ಎಂಬ ವಂಚನೆಗೆ ಒಳಗಾಗಬೇಡಿ.',
        wrongActions: [
          {
            id: 'scan-qr',
            alertTitle: '⚠️ ಪಾವತಿ ವಂಚನೆ!',
            alertMessage: 'QR ಕೋಡ್‌ಗಳನ್ನು ಹಣ ಕಳುಹಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ, ಪಡೆಯಲು ಅಲ್ಲ.',
            explanation: 'ಪಾವತಿ ಆಪ್‌ನಲ್ಲಿ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದರಿಂದ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾಗಬಹುದು. ಹಣ ಪಡೆಯಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'job-offer',
    title: 'Too Good To Be True Job',
    category: 'security',
    type: 'email',
    saathiIntro: 'You got an email for a "Part-time Work from Home" job offering ₹50,000 per week for just 2 hours of work.',
    saathiPrompt: 'They are asking for a ₹500 "Registration Fee" to start. Should you pay?',
    content: {
      offer: 'Part-time Data Entry',
      payment: '₹50,000/week',
      fee: '₹500'
    },
    correctAction: 'ignore-offer',
    wrongActions: [
      {
        id: 'pay-fee',
        alertTitle: '⚠️ Employment Fraud!',
        alertMessage: 'Real jobs pay you; they don\'t ask for money before hiring.',
        explanation: 'Any job that asks for an upfront fee for registration, training, or equipment is almost certainly a scam.'
      }
    ],
    successMessage: 'Solid decision!',
    successExplanation: 'Authentic companies follow professional hiring processes and never ask for money.',
    translations: {
      hindi: {
        title: 'फर्जी नौकरी का झांसा',
        saathiIntro: 'आपको "पार्ट-टाइम घर बैठे काम करें" (Part-time Work from Home) के लिए एक ईमेल मिला है, जिसमें सिर्फ 2 घंटे काम करने के लिए ₹50,000 प्रति सप्ताह का वादा किया गया है।',
        saathiPrompt: 'वे काम शुरू करने के लिए ₹500 का "रजिस्ट्रेशन शुल्क" (Registration Fee) मांग रहे हैं। क्या आपको भुगतान करना चाहिए?',
        content: {
          offer: 'पार्ट-टाइम डेटा एंट्री',
          payment: '₹50,000/सप्ताह',
          fee: '₹500'
        },
        successMessage: 'सही निर्णय!',
        successExplanation: 'असली कंपनियां पैसे देती हैं; वे काम पर रखने से पहले कभी पैसे नहीं मांगतीं।',
        wrongActions: [
          {
            id: 'pay-fee',
            alertTitle: '⚠️ रोजगार धोखाधड़ी!',
            alertMessage: 'कोई भी नौकरी जो रजिस्ट्रेशन या ट्रेनिंग के लिए एडवांस पैसे मांगती है, वह लगभग हमेशा धोखा होती है।',
            explanation: 'असली कंपनियां पेशेवर प्रक्रिया का पालन करती हैं और भर्ती करने के लिए कभी भी पैसे नहीं मांगती हैं।'
          }
        ]
      },
      tamil: {
        title: 'நம்பமுடியாத வேலை வாய்ப்பு',
        saathiIntro: 'உங்களுக்கு ஒரு மின்னஞ்சல் வந்துள்ளது. அதில் ஒரு நாளைக்கு 2 மணிநேரம் மட்டும் "வீட்டில் இருந்தே வேலை" செய்தால் வாரத்திற்கு ₹50,000 சம்பாதிக்கலாம் என்று உள்ளது.',
        saathiPrompt: 'வேலையைத் தொடங்க அவர்கள் ₹500 "பதிவு கட்டணம்" கேட்கிறார்கள். நீங்கள் பணம் செலுத்துவீர்களா?',
        content: {
          offer: 'பகுதி நேர டேட்டா என்ட்ரி',
          payment: '₹50,000/வாரம்',
          fee: '₹500'
         },
        successMessage: 'சிறந்த முடிவு!',
        successExplanation: 'உண்மையான நிறுவனங்கள் உங்களுக்குப் பணம் கொடுக்கும், ஆனால் வேலையில் சேர உங்களிடம் பணம் கேட்காது.',
        wrongActions: [
          {
            id: 'pay-fee',
            alertTitle: '⚠️ வேலை வாய்ப்பு மோசடி!',
            alertMessage: 'வேலைக்கு சேரும் முன்பே பதிவு கட்டணம் அல்லது பயிற்சி கட்டணம் கேட்பது ஒரு மோசடியாகும்.',
            explanation: 'எந்தவொரு உண்மையான நிறுவனமும் வேலை வழங்குவதற்காக உங்களிடம் பணம் கேட்காது.'
          }
        ]
      },
      telugu: {
        title: 'నమ్మశక్యం కాని ఉద్యోగ ఆఫర్',
        saathiIntro: 'మీకు ఒక ఈమెయిల్ వచ్చింది. రోజుకు 2 గంటల "వర్క్ ఫ్రమ్ హోమ్" ద్వారా వారానికి ₹50,000 సంపాదించవచ్చని అందులో ఉంది.',
        saathiPrompt: 'పని ప్రారంభించడానికి వారు ₹500 "రిజిస్ట్రేషన్ ఫీజు" అడుగుతున్నారు. మీరు చెల్లిస్తారా?',
        content: {
          offer: 'పార్ట్ టైమ్ డేటా ఎంట్రీ',
          payment: '₹50,000/వారం',
          fee: '₹500'
        },
        successMessage: 'సరైన నిర్ణయం!',
        successExplanation: 'నిజమైన కంపెనీలు మనకు జీతం ఇస్తాయి, కానీ ఉద్యోగం ఇవ్వడానికి మన నుండి డబ్బులు అడగవు.',
        wrongActions: [
          {
            id: 'pay-fee',
            alertTitle: '⚠️ ఉపాధి మోసం!',
            alertMessage: 'ఉద్యోగం ఇచ్చే ముందు రిజిస్ట్రేషన్ లేదా ట్రైనింగ్ పేరుతో డబ్బు అడిగితే అది కచ్చితంగా మోసమే.',
            explanation: 'అసలైన కంపెనీలు ప్రొఫెషనల్ పద్ధతులు పాటిస్తాయి మరియు డబ్బు అడగవు.'
          }
        ]
      },
      kannada: {
        title: 'ನಂಬಲಾಗದ ಕೆಲಸದ ಆಫರ್',
        saathiIntro: 'ನಿಮಗೆ ಒಂದು ಇಮೇಲ್ ಬಂದಿದೆ. ದಿನಕ್ಕೆ ಕೇವಲ 2 ಗಂಟೆ "ವರ್ಕ್ ಫ್ರಮ್ ಹೋಮ್" ಮೂಲಕ ವಾರಕ್ಕೆ ₹50,000 ಗಳಿಸಬಹುದು ಎಂದು ಅದರಲ್ಲಿ ಹೇಳಲಾಗಿದೆ.',
        saathiPrompt: 'ಕೆಲಸ ಪ್ರಾರಂಭಿಸಲು ಅವರು ₹500 "ನೋಂದಣಿ ಶುಲ್ಕ" ಕೇಳುತ್ತಿದ್ದಾರೆ. ನೀವು ಪಾವತಿಸುತ್ತೀರಾ?',
        content: {
          offer: 'ಪಾರ್ಟ್ ಟೈಮ್ ಡೇಟಾ ಎಂಟ್ರಿ',
          payment: '₹50,000/ವಾರ',
          fee: '₹500'
        },
        successMessage: 'ಉತ್ತಮ ನಿರ್ಧಾರ!',
        successExplanation: 'ನಿಜವಾದ ಕಂಪನಿಗಳು ನಿಮಗೆ ಸಂಬಳ ನೀಡುತ್ತವೆ, ಆದರೆ ಕೆಲಸ ನೀಡಲು ಹಣ ಕೇಳುವುದಿಲ್ಲ.',
        wrongActions: [
          {
            id: 'pay-fee',
            alertTitle: '⚠️ ಉದ್ಯೋಗ ವಂಚನೆ!',
            alertMessage: 'ಕೆಲಸ ನೀಡುವ ಮುನ್ನ ನೋಂದಣಿ ಅಥವಾ ತರಬೇತಿ ಹೆಸರಿನಲ್ಲಿ ಹಣ ಕೇಳಿದರೆ ಅದು ವಂಚನೆಯಾಗಿರುತ್ತದೆ.',
            explanation: 'ಅಧಿಕೃತ ಕಂಪನಿಗಳು ವೃತ್ತಿಪರ ವಿಧಾನಗಳನ್ನು ಅನುಸರಿಸುತ್ತವೆ ಮತ್ತು ಎಂದಿಗೂ ಹಣ ಕೇಳುವುದಿಲ್ಲ.'
          }
        ]
      }
    }
  },
  {
    id: 'lottery-scam',
    title: 'The KBC Lottery',
    category: 'security',
    type: 'whatsapp',
    saathiIntro: 'A WhatsApp message says you have won the "KBC Lottery" worth ₹25 Lakhs.',
    saathiPrompt: 'Should you provide your bank details to "process the transfer"?',
    content: {
      amount: '25 Lakhs',
      sender: 'KBC Lottery Office'
    },
    correctAction: 'block-sender',
    wrongActions: [
      {
        id: 'send-details',
        alertTitle: '⚠️ Financial Scam!',
        alertMessage: 'If you didn\'t buy a ticket, you didn\'t win a lottery. This is a trap to steal bank info.',
        explanation: 'Lottery scams try to steal your personal information or ask for "transfer fees" that disappear once paid.'
      }
    ],
    successMessage: 'Smart thinking!',
    successExplanation: 'Block and report these numbers immediately.',
    translations: {
      hindi: {
        title: 'केबीसी लॉटरी (KBC Lottery)',
        saathiIntro: 'व्हाट्सएप पर एक मैसेज आया है कि आपने ₹25 लाख की "केबीसी लॉटरी" जीती है।',
        saathiPrompt: 'क्या आपको पैसे ट्रान्सफर करने के लिए अपने बैंक डिटेल्स देने चाहिए?',
        content: {
          amount: '25 लाख',
          sender: 'केबीसी लॉटरी ऑफिस'
        },
        successMessage: 'बहुत समझदारी!',
        successExplanation: 'यदि आपने टिकट नहीं खरीदा है, तो आपने लॉटरी नहीं जीती है। इन नंबरों को तुरंत ब्लॉक करें।',
        wrongActions: [
          {
            id: 'send-details',
            alertTitle: '⚠️ वित्तीय धोखाधड़ी!',
            alertMessage: 'यह बैंक की जानकारी चुराने का एक जाल है। जालसाज अक्सर "ट्रांसफर फीस" के नाम पर पैसे लूटते हैं।',
            explanation: 'लॉटरी घोटाले आपकी व्यक्तिगत जानकारी चुराने का प्रयास करते हैं। ऐसे संदिग्ध संदेशों को हमेशा इग्नोर करें।'
          }
        ]
      },
      tamil: {
        title: 'கேபிசி (KBC) லாட்டரி',
        saathiIntro: 'உங்களுக்கு ₹25 லட்சம் "கேபிசி லாட்டரி" விழுந்திருப்பதாக வாட்ஸ்அப்பில் ஒரு மெசேஜ் வருகிறது.',
        saathiPrompt: 'பணத்தைப் பெற உங்கள் வங்கி விவரங்களை அவர்களுக்கு அளிப்பீர்களா?',
        content: {
          amount: '25 லட்சம்',
          sender: 'கேபிசி லாட்டரி அலுவலகம்'
        },
        successMessage: 'சிறந்த சிந்தனை!',
        successExplanation: 'நீங்கள் லாட்டரி சீட்டே வாங்கவில்லை என்றால், உங்களுக்குப் பரிசு எப்படி வரும்? அந்த எண்ணை உடனே பிளாக் (Block) செய்யவும்.',
        wrongActions: [
          {
            id: 'send-details',
            alertTitle: '⚠️ நிதி மோசடி!',
            alertMessage: 'இது உங்கள் வங்கித் தகவல்களைத் திருடுவதற்கான ஒரு சூழ்ச்சியாகும்.',
            explanation: 'பரிசு விழுந்திருப்பதாகக் கூறி சில கட்டணங்கள் செலுத்தச் சொல்லுவார்கள், ஆனால் பணம் செலுத்திய பிறகு அவர்கள் காணாமல் போய்விடுவார்கள்.'
          }
        ]
      },
      telugu: {
        title: 'KBC లాటరీ',
        saathiIntro: 'మీరు ₹25 లక్షల "KBC లాటరీ" గెలుచుకున్నట్లు వాట్సాప్‌లో ఒక మెసేజ్ వచ్చింది.',
        saathiPrompt: 'డబ్బు పంపడానికి మీ బ్యాంక్ వివరాలను వారికి ఇస్తారా?',
        content: {
          amount: '25 లక్షలు',
          sender: 'KBC లాటరీ ఆఫీస్'
        },
        successMessage: 'చాలా తెలివైన ఆలోచన!',
        successExplanation: 'మీరు టికెట్ కొనకుండానే లాటరీ గెలవడం అసాధ్యం. అటువంటి నంబర్లను వెంటనే బ్లాక్ చేయండి.',
        wrongActions: [
          {
            id: 'send-details',
            alertTitle: '⚠️ ఆర్థిక మోసం!',
            alertMessage: 'ఇది మీ బ్యాంక్ సమాచారాన్ని దొంగిలించడానికి పన్నిన ఉచ్చు.',
            explanation: 'లాటరీ మోసగాళ్లు మీ వ్యక్తిగత సమాచారాన్ని దొంగిలించడానికి లేదా "ట్రాన్స్‌ఫర్ ఫీజు" అడగడానికి ప్లాన్ చేస్తారు.'
          }
        ]
      },
      kannada: {
        title: 'KBC ಲಾಟರಿ',
        saathiIntro: 'ನೀವು ₹25 ಲಕ್ಷದ "KBC ಲಾಟರಿ" ಗೆದ್ದಿದ್ದೀರಿ ಎಂದು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಒಂದು ಸಂದೇಶ ಬಂದಿದೆ.',
        saathiPrompt: 'ಹಣ ವರ್ಗಾವಣೆ ಮಾಡಲು ನೀವು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ನೀಡುತ್ತೀರಾ?',
        content: {
          amount: '25 ಲಕ್ಷ',
          sender: 'KBC ಲಾಟರಿ ಆಫೀಸ್'
        },
        successMessage: 'ಉತ್ತಮ ಆಲೋಚನೆ!',
        successExplanation: 'ನೀವು ಟಿಕೆಟ್ ಖರೀದಿಸದಿದ್ದರೆ ಲಾಟರಿ ಗೆಲ್ಲಲು ಸಾಧ್ಯವಿಲ್ಲ. ಕೂಡಲೇ ಆ ನಂಬರ್ ಅನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿ.',
        wrongActions: [
          {
            id: 'send-details',
            alertTitle: '⚠️ ಆರ್ಥಿಕ ವಂಚನೆ!',
            alertMessage: 'ಇದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಮಾಹಿತಿ ಕದಿಯಲು ಹೂಡಿದ ಸಂಚು.',
            explanation: 'ಲಾವರಿ ವಂಚಕರು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಕದಿಯಲು ಅಥವಾ "ವರ್ಗಾವಣೆ ಶುಲ್ಕ" ಎಂಬ ಹೆಸರಿನಲ್ಲಿ ಹಣ ಪೀಕಲು ಪ್ರಯತ್ನಿಸುತ್ತಾರೆ.'
          }
        ]
      }
    }
  },
  // --- BASICS ---
  {
    id: 'browser-basics',
    title: 'Searching the Web',
    category: 'basics',
    type: 'browser',
    saathiIntro: 'Abhi, you need to find more information about "Digital Safety" online.',
    saathiPrompt: 'Where would you type the words you want to search for?',
    content: {
      url: 'google.com',
      elements: ['Address Bar', 'Search Box']
    },
    correctAction: 'type-in-search',
    wrongActions: [
      {
        id: 'click-logo',
        alertTitle: 'Try Again',
        alertMessage: 'Clicking the logo just refreshes the page.',
        explanation: 'Type your query in the central search box or the top address bar to start searching.'
      }
    ],
    successMessage: 'Correct!',
    successExplanation: 'Using search engines helps you find information quickly on the internet.',
    translations: {
      hindi: {
        title: 'वेब पर खोजना',
        saathiIntro: 'अभि, आपको ऑनलाइन "डिजिटल सुरक्षा" के बारे में अधिक जानकारी खोजने की आवश्यकता है।',
        saathiPrompt: 'आप जिन शब्दों को खोजना चाहते हैं उन्हें कहाँ टाइप करेंगे?',
        successMessage: 'सही!',
        successExplanation: 'सर्च इंजन का उपयोग करने से आपको इंटरनेट पर जानकारी जल्दी खोजने में मदद मिलती है।',
        wrongActions: [
          {
            id: 'click-logo',
            alertTitle: 'फिर से कोशिश करें',
            alertMessage: 'लोगो पर क्लिक करने से केवल पेज रिफ्रेश होता है।',
            explanation: 'खोज शुरू करने के लिए बीच वाले सर्च बॉक्स या ऊपर वाले एड्रेस बार में अपना सवाल टाइप करें।'
          }
        ]
      },
      tamil: {
        title: 'இணையத்தில் தேடுதல்',
        saathiIntro: 'அபி, "டிஜிட்டல் பாதுகாப்பு" (Digital Safety) பற்றி ஆன்லைனில் கூடுதல் தகவல்களைத் தேட வேண்டும்.',
        saathiPrompt: 'நீங்கள் தேட விரும்பும் சொற்களை எங்கே டைப் செய்வீர்கள்?',
        successMessage: 'சரி!',
        successExplanation: 'தேடுபொறிகளைப் (Search Engines) பயன்படுத்துவது இணையத்தில் தகவல்களை விரைவாகக் கண்டறிய உதவுகிறது.',
        wrongActions: [
          {
            id: 'click-logo',
            alertTitle: 'மீண்டும் முயற்சிக்கவும்',
            alertMessage: 'லோகோவை (Logo) கிளிக் செய்தால் பக்கம் மீண்டும் லோடு (Refresh) மட்டுமே ஆகும்.',
            explanation: 'தேடத் தொடங்க, நடுவில் உள்ள தேடல் பெட்டியிலோ அல்லது மேலே உள்ள முகவரிப் பட்டியிலோ (Address Bar) உங்கள் வினவலை டைப் செய்யவும்.'
          }
        ]
      },
      telugu: {
        title: 'వెబ్‌లో వెతకడం',
        saathiIntro: 'అభి, మీరు ఆన్‌లైన్‌లో "డిజిటల్ సేఫ్టీ" గురించి మరింత సమాచారం తెలుసుకోవాలి.',
        saathiPrompt: 'మీరు వెతకాలనుకుంటున్న పదాలను ఎక్కడ టైప్ చేస్తారు?',
        successMessage: 'సరిగ్గా చెప్పారు!',
        successExplanation: 'సెర్చ్ ఇంజిన్‌లను ఉపయోగించడం వల్ల ఇంటర్నెట్‌లో సమాచారాన్ని త్వరగా కనుగొనవచ్చు.',
        wrongActions: [
          {
            id: 'click-logo',
            alertTitle: 'మళ్ళీ ప్రయత్నించండి',
            alertMessage: 'లోగోపై క్లిక్ చేస్తే పేజీ కేవలం రీఫ్రెష్ అవుతుంది.',
            explanation: 'మీరు వెతకాల్సిన పదాలను సెర్చ్ బాక్స్ లో లేదా పైన ఉన్న అడ్రస్ బార్ లో టైప్ చేయాలి.'
          }
        ]
      },
      kannada: {
        title: 'ವೆಬ್‌ನಲ್ಲಿ ಹುಡುಕುವುದು',
        saathiIntro: 'ಅಭಿ, ನೀವು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ "ಡಿಜಿಟಲ್ ಸುರಕ್ಷತೆ" ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಪಡೆಯಬೇಕಾಗಿದೆ.',
        saathiPrompt: 'ನೀವು ಹುಡುಕಬೇಕಾದ ಪದಗಳನ್ನು ಎಲ್ಲಿ ಟೈಪ್ ಮಾಡುತ್ತೀರಿ?',
        successMessage: 'ಸರಿಯಾಗಿದೆ!',
        successExplanation: 'ಸರ್ಚ್ ಎಂಜಿನ್‌ಗಳನ್ನು ಬಳಸುವುದರಿಂದ ಇಂಟರ್ನೆಟ್‌ನಲ್ಲಿ ಮಾಹಿತಿಯನ್ನು ವೇಗವಾಗಿ ಹುಡುಕಬಹುದು.',
        wrongActions: [
          {
            id: 'click-logo',
            alertTitle: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
            alertMessage: 'ಲೋಗೋ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ಪುಟವು ರಿಫ್ರೆಶ್ ಆಗುತ್ತದೆ ಅಷ್ಟೆ.',
            explanation: 'ಹುಡುಕಾಟ ಆರಂಭಿಸಲು ಮಧ್ಯದ ಸರ್ಚ್ ಬಾಕ್ಸ್ ಅಥವಾ ಮೇಲಿನ ಅಡ್ರೆಸ್ ಬಾರ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪದಗಳನ್ನು ಟೈಪ್ ಮಾಡಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'download-file',
    title: 'Getting a Document',
    category: 'basics',
    type: 'browser',
    saathiIntro: 'You found a PDF guide you want to keep on your computer.',
    saathiPrompt: 'Which button will you click to save it permanently?',
    content: {
      fileName: 'safety_guide.pdf'
    },
    correctAction: 'click-download',
    wrongActions: [
      {
        id: 'click-close',
        alertTitle: 'Wait!',
        alertMessage: 'Closing the window will cancel the download.',
        explanation: 'Look for the downward arrow icon or the word "Download" to save files.'
      }
    ],
    successMessage: 'Well done!',
    successExplanation: 'Downloading saves a copy of the internet file onto your own device.',
    translations: {
      hindi: {
        title: 'डॉक्यूमेंट प्राप्त करना',
        saathiIntro: 'आपको एक PDF गाइड मिली है जिसे आप अपने कंप्यूटर पर रखना चाहते हैं।',
        saathiPrompt: 'इसे स्थायी रूप से सुरक्षित करने के लिए आप किस बटन पर क्लिक करेंगे?',
        successMessage: 'बहुत बढ़िया!',
        successExplanation: 'डाउनलोड करने से इंटरनेट की फाइल की एक कॉपी आपके अपने डिवाइस पर सुरक्षित हो जाती है।',
        wrongActions: [
          {
            id: 'click-close',
            alertTitle: 'रुकें!',
            alertMessage: 'विंडो को बंद करने से डाउनलोड रद्द हो जाएगा।',
            explanation: 'फाइलों को सुरक्षित करने के लिए नीचे की ओर इशारा करने वाले तीर (Arrow) के आइकन या "Download" शब्द को खोजें।'
          }
        ]
      },
      tamil: {
        title: 'ஒரு ஆவணத்தைப் பெறுதல்',
        saathiIntro: 'உங்கள் கணினியில் வைத்திருக்க விரும்பும் ஒரு PDF வழிகாட்டியை நீங்கள் கண்டறிந்துள்ளீர்கள்.',
        saathiPrompt: 'அதை நிரந்தரமாகச் சேமிக்க எந்தப் பொத்தானைக் கிளிக் செய்வீர்கள்?',
        successMessage: 'மிகவும் நன்று!',
        successExplanation: 'பதிவிறக்கம் (Download) செய்வது இணையத்தில் உள்ள கோப்பின் நகலை உங்கள் சொந்த சாதனத்தில் சேமிக்கிறது.',
        wrongActions: [
          {
            id: 'click-close',
            alertTitle: 'காத்திருங்கள்!',
            alertMessage: 'சாளரத்தை (Window) மூடினால் பதிவிறக்கம் ரத்தாகிவிடும்.',
            explanation: 'கோப்புகளைச் சேமிக்க கீழ்நோக்கிய அம்பு குறி ஐகான் அல்லது "Download" என்ற வார்த்தையைத் தேடுங்கள்.'
          }
        ]
      },
      telugu: {
        title: 'డాక్యుమెంట్ సేవ్ చేయడం',
        saathiIntro: 'మీరు మీ కంప్యూటర్‌లో ఉంచుకోవాలనుకుంటున్న ఒక PDF గైడ్‌ని కనుగొన్నారు.',
        saathiPrompt: 'దాన్ని శాశ్వతంగా సేవ్ చేయడానికి మీరు ఏ బటన్‌పై క్లిక్ చేస్తారు?',
        successMessage: 'చాలా బాగుంది!',
        successExplanation: 'డౌన్‌లోడ్ చేయడం ద్వారా ఇంటర్నెట్ ఫైల్ యొక్క కాపీని మీ పరికరంలో సేవ్ చేసుకోవచ్చు.',
        wrongActions: [
          {
            id: 'click-close',
            alertTitle: 'ఆగండి!',
            alertMessage: 'విండోను మూసివేస్తే డౌన్‌లోడ్ రద్దు చేయబడుతుంది.',
            explanation: 'ఫైళ్లను సేవ్ చేయడానికి కిందకు ఉన్న బాణం గుర్తును లేదా "Download" అనే పదాన్ని వెతకండి.'
          }
        ]
      },
      kannada: {
        title: 'ಡಾಕ್ಯುಮೆಂಟ್ ಪಡೆಯುವುದು',
        saathiIntro: 'ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಇಡಲು ನೀವು ಒಂದು PDF ಗೈಡ್ ಅನ್ನು ಕಂಡುಕೊಂಡಿದ್ದೀರಿ.',
        saathiPrompt: 'ಅದನ್ನು ಶಾಶ್ವತವಾಗಿ ಉಳಿಸಲು ನೀವು ಯಾವ ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡುತ್ತೀರಿ?',
        successMessage: 'ತುಂಬಾ ಒಳ್ಳೆಯದು!',
        successExplanation: 'ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದರಿಂದ ಇಂಟರ್ನೆಟ್ ಫೈಲ್‌ನ ಪ್ರತಿಯನ್ನು ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಬಹುದು.',
        wrongActions: [
          {
            id: 'click-close',
            alertTitle: 'ಕಾಯಿರಿ!',
            alertMessage: 'ವಿಂಡೋವನ್ನು ಮುಚ್ಚಿದರೆ ಡೌನ್‌ಲೋಡ್ ರದ್ದಾಗುತ್ತದೆ.',
            explanation: 'ಫೈಲ್‌ಗಳನ್ನು ಉಳಿಸಲು ಕೆಳಮುಖವಾಗಿರುವ ಬಾಣದ ಗುರುತು ಅಥವಾ "Download" ಎಂಬ ಪದವನ್ನು ಹುಡುಕಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'usb-access',
    title: 'Using a Pen Drive',
    category: 'basics',
    type: 'desktop',
    saathiIntro: 'Abhi, your friend gave you a pen drive with some project files.',
    saathiPrompt: 'Where do you go to see the contents of this inserted drive?',
    content: {
      drives: ['Local Disk (C:)', 'USB Drive (D:)']
    },
    correctAction: 'click-usb-drive',
    wrongActions: [
      {
        id: 'click-local-disk',
        alertTitle: 'Wrong Drive',
        alertMessage: 'Local Disk (C:) is your computer\'s internal storage.',
        explanation: 'Removable drives like pen drives appear with their own name, usually as Drive D: or E:.'
      }
    ],
    successMessage: 'Found it!',
    successExplanation: 'External storage like USB drives allow you to carry files between different computers.',
    translations: {
      hindi: {
        title: 'पेन ड्राइव का उपयोग करना',
        saathiIntro: 'అభి, మీ స్నేహితుడు మీకు కొన్ని ప్రాజెక్ట్ ఫైళ్ళతో కూడిన పెన్ డ్రైవ్ ఇచ్చారు.',
        saathiPrompt: 'ఈ పెన్ డ్రైవ్‌లోని ఫైళ్లను చూడటానికి మీరు ఎక్కడికి వెళతారు?',
        successMessage: 'కనుగొన్నారు!',
        successExplanation: 'పెన్ డ్రైవ్‌లు ఒక కంప్యూటర్ నుండి మరొక కంప్యూటర్‌కు ఫైళ్లను సులభంగా తీసుకెళ్లడానికి ఉపయోగపడతాయి.',
        wrongActions: [
          {
            id: 'click-local-disk',
            alertTitle: 'తప్పు డ్రైవ్',
            alertMessage: 'లోకల్ డిస్క్ (C:) అనేది మీ కంప్యూటర్ లోపల ఉండే స్టోరేజ్.',
            explanation: 'పెన్ డ్రైవ్‌లు వేరే పేరుతో లేదా సాధారణంగా Drive D: లేదా E: గా కనిపిస్తాయి.'
          }
        ]
      },
      tamil: {
        title: 'பென் டிரைவைப் (Pen Drive) பயன்படுத்துதல்',
        saathiIntro: 'அபி, உங்கள் நண்பர் சில முக்கியமான கோப்புகள் உள்ள பென் டிரைவை உங்களிடம் கொடுத்துள்ளார்.',
        saathiPrompt: 'இந்த பென் டிரைவில் உள்ளவற்றை எங்கே சென்று பார்ப்பீர்கள்?',
        successMessage: 'கண்டுபிடித்து விட்டீர்கள்!',
        successExplanation: 'பென் டிரைவ்கள் போன்ற வெளிப்புற சேமிப்பகங்கள் கோப்புகளை வெவ்வேறு கணினிகளுக்கு இடையில் கொண்டு செல்ல உதவுகின்றன.',
        wrongActions: [
          {
            id: 'click-local-disk',
            alertTitle: 'தவறான டிரைவ்',
            alertMessage: 'Local Disk (C:) என்பது உங்கள் கணினியின் உள்ளகச் சேமிப்பகம் (Internal Storage) ஆகும்.',
            explanation: 'பென் டிரைவ்கள் தனக்கென ஒரு பெயருடன் அல்லது பொதுவாக Drive D: அல்லது E: என்று தோன்றும்.'
          }
        ]
      },
      telugu: {
        title: 'పెన్ డ్రైవ్ ఉపయోగించడం',
        saathiIntro: 'అభి, మీ స్నేహితుడు మీకు కొన్ని ప్రాజెక్ట్ ఫైళ్ళతో కూడిన పెన్ డ్రైవ్ ఇచ్చారు.',
        saathiPrompt: 'ఈ పెన్ డ్రైవ్‌లోని ఫైళ్లను చూడటానికి మీరు ఎక్కడికి వెళతారు?',
        successMessage: 'కనుగొన్నారు!',
        successExplanation: 'పెన్ డ్రైవ్‌లు ఒక కంప్యూటర్ నుండి మరొక కంప్యూటర్‌కు ఫైళ్లను సులభంగా తీసుకెళ్లడానికి ఉపయోగపడతాయి.',
        wrongActions: [
          {
            id: 'click-local-disk',
            alertTitle: 'తప్పు డ్రైవ్',
            alertMessage: 'లోకల్ డిస్క్ (C:) అనేది మీ కంప్యూటర్ లోపల ఉండే స్టోరేజ్.',
            explanation: 'పెన్ డ్రైవ్‌లు వేరే పేరుతో లేదా సాధారణంగా Drive D: లేదా E: గా కనిపిస్తాయి.'
          }
        ]
      },
      kannada: {
        title: 'ಪೆನ್ ಡ್ರೈವ್ ಬಳಸುವುದು',
        saathiIntro: 'ಅಭಿ, ನಿಮ್ಮ ಸ್ನೇಹಿತ ನಿಮಗೆ ಕೆಲವು ಪ್ರಾಜೆಕ್ಟ್ ಫೈಲ್‌ಗಳಿರುವ ಪೆನ್ ಡ್ರೈವ್ ನೀಡಿದ್ದಾರೆ.',
        saathiPrompt: 'ಈ ಪೆನ್ ಡ್ರೈವ್‌ನಲ್ಲಿರುವ ವಿಷಯಗಳನ್ನು ನೋಡಲು ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತೀರಿ?',
        successMessage: 'ಸಿಕ್ಕಿತು!',
        successExplanation: 'ಯುಎಸ್‌ಬಿ ಡ್ರೈವ್‌ಗಳು ಫೈಲ್‌ಗಳನ್ನು ಒಂದು ಕಂಪ್ಯೂಟರ್‌ನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಸಾಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.',
        wrongActions: [
          {
            id: 'click-local-disk',
            alertTitle: 'ತಪ್ಪು ಡ್ರೈವ್',
            alertMessage: 'ಲೋಕಲ್ ಡಿಸ್ಕ್ (C:) ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ನ ಆಂತರಿಕ ಸಂಗ್ರಹಣೆಯಾಗಿದೆ.',
            explanation: 'ಪೆನ್ ಡ್ರೈವ್‌ಗಳು ತಮ್ಮದೇ ಆದ ಹೆಸರಿನೊಂದಿಗೆ ಅಥವಾ ಸಾಮಾನ್ಯವಾಗಿ Drive D: ಅಥವಾ E: ಆಗಿ ಕಾಣಿಸುತ್ತವೆ.'
          }
        ]
      }
    }
  },
  {
    id: 'volume-control',
    title: 'Adjusting Sound',
    category: 'basics',
    type: 'desktop',
    saathiIntro: 'The video you are watching is too loud.',
    saathiPrompt: 'Show me where the volume controls are usually located on the taskbar.',
    content: {
      icons: ['WiFi', 'Battery', 'Speaker']
    },
    correctAction: 'click-speaker',
    wrongActions: [
      {
        id: 'click-battery',
        alertTitle: 'Close...',
        alertMessage: 'The battery icon shows your power level.',
        explanation: 'The speaker icon is used to adjust the sound volume of your computer.'
      }
    ],
    successMessage: 'Perfect!',
    successExplanation: 'Knowing your taskbar icons helps you control your computer quickly.',
    translations: {
      hindi: {
        title: 'आवाज़ को नियंत्रित करना',
        saathiIntro: 'आप जो वीडियो देख रहे हैं उसकी आवाज़ बहुत तेज़ है।',
        saathiPrompt: 'मुझे दिखाएं कि टास्कबार पर आवाज़ (Volume) कंट्रोल आमतौर पर कहाँ स्थित होते हैं।',
        successMessage: 'शानदार!',
        successExplanation: 'टास्कबार आइकन की जानकारी होने से आप अपने कंप्यूटर को तेज़ी से कंट्रोल कर सकते हैं।',
        wrongActions: [
          {
            id: 'click-battery',
            alertTitle: 'करीब हैं...',
            alertMessage: 'बैटरी आइकन आपके पावर लेवल को दिखाता है।',
            explanation: 'कंप्यूटर की आवाज़ को एडजस्ट करने के लिए स्पीकर (Speaker) आइकन का उपयोग किया जाता है।'
          }
        ]
      },
      tamil: {
        title: 'ஒலியை சரிசெய்தல் (Volume Control)',
        saathiIntro: 'நீங்கள் பார்க்கும் வீடியோவின் சத்தம் மிகவும் அதிகமாக உள்ளது.',
        saathiPrompt: 'டாஸ்க்பார் (Taskbar) பகுதியில் வால்யூம் கண்ட்ரோல் எங்கே இருக்கும் என்று எனக்குக் காட்டுங்கள்.',
        successMessage: 'அற்புதம்!',
        successExplanation: 'டாஸ்க்பாரில் உள்ள ஐகான்களைப் பற்றித் தெரிந்துகொள்வது உங்கள் கணினியை விரைவாகக் கையாள உதவும்.',
        wrongActions: [
          {
            id: 'click-battery',
            alertTitle: 'நெருங்கிவிட்டீர்கள்...',
            alertMessage: 'பேட்டரி ஐகான் உங்கள் லேப்டாப்பின் மின்சார அளவைக் காட்டுகிறது.',
            explanation: 'கணினியின் சத்தத்தை (Volume) சரிசெய்ய ஸ்பீக்கர் ஐகான் பயன்படுத்தப்படுகிறது.'
          }
        ]
      },
      telugu: {
        title: 'శబ్దాన్ని నియంత్రించడం (Volume Control)',
        saathiIntro: 'మీరు చూస్తున్న వీడియో శబ్దం చాలా ఎక్కువగా ఉంది.',
        saathiPrompt: 'టాస్క్‌బార్‌లో వాల్యూమ్ కంట్రోల్స్ ఎక్కడ ఉంటాయో నాకు చూపండి.',
        successMessage: 'అద్భుతం!',
        successExplanation: 'టాస్క్‌బార్ ఐకాన్‌ల గురించి తెలుసుకోవడం వల్ల మీ కంప్యూటర్‌ను వేగంగా నియంత్రించవచ్చు.',
        wrongActions: [
          {
            id: 'click-battery',
            alertTitle: 'దగ్గరగా వచ్చారు...',
            alertMessage: 'బ్యాటరీ ఐకాన్ మీ పవర్ లెవల్‌ను చూపుతుంది.',
            explanation: 'కంప్యూటర్ వాల్యూమ్ సర్దుబాటు చేయడానికి స్పీకర్ ఐకాన్ ఉపయోగిస్తారు.'
          }
        ]
      },
      kannada: {
        title: 'ಶಬ್ದವನ್ನು ನಿಯಂತ್ರಿಸುವುದು (Volume Control)',
        saathiIntro: 'ನೀವು ನೋಡುತ್ತಿರುವ ವಿಡಿಯೋದ ಶಬ್ದವು ತುಂಬಾ ಹೆಚ್ಚಾಗಿದೆ.',
        saathiPrompt: 'ಟಾಸ್ಕ್‌ಬಾರ್‌ನಲ್ಲಿ ವಾಲ್ಯೂಮ್ ಕಂಟ್ರೋಲ್ ಎಲ್ಲಿರುತ್ತದೆ ಎಂದು ನನಗೆ ತೋರಿಸಿ.',
        successMessage: 'ಅದ್ಭುತ!',
        successExplanation: 'ಟಾಸ್ಕ್‌ಬಾರ್ ಐಕಾನ್‌ಗಳ ಬಗ್ಗೆ ತಿಳಿಯುವುದು ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್ ಅನ್ನು ವೇಗವಾಗಿ ಬಳಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
        wrongActions: [
          {
            id: 'click-battery',
            alertTitle: 'ಹತ್ತಿರ ಬಂದಿದ್ದೀರಿ...',
            alertMessage: 'ಬ್ಯಾಟರಿ ಐಕಾನ್ ನಿಮ್ಮ ಪವರ್ ಮಟ್ಟವನ್ನು ತೋರಿಸುತ್ತದೆ.',
            explanation: 'ಕಂಪ್ಯೂಟರ್ ವಾಲ್ಯೂಮ್ ಸರಿಹೊಂದಿಸಲು ಸ್ಪೀಕರ್ ಐಕಾನ್ ಬಳಸಲಾಗುತ್ತದೆ.'
          }
        ]
      }
    }
  },
  {
    id: 'close-apps',
    title: 'Saving Battery',
    category: 'basics',
    type: 'desktop',
    saathiIntro: 'You have many apps open and your computer is getting slow.',
    saathiPrompt: 'How do you close an application that you are finished using?',
    content: {
      appName: 'Browser'
    },
    correctAction: 'click-x-button',
    wrongActions: [
      {
        id: 'click-minimize',
        alertTitle: 'Not Quite',
        alertMessage: 'Minimize just hides the app; it is still running.',
        explanation: 'Click the "X" button in the top right corner to fully close and exit an application.'
      }
    ],
    successMessage: 'Exactly!',
    successExplanation: 'Closing unused apps keeps your computer running fast and saves battery.',
    translations: {
      hindi: {
        title: 'बैटरी बचाना',
        saathiIntro: 'आपके बहुत सारे ऐप्स खुले हैं और आपका कंप्यूटर धीमा हो रहा है।',
        saathiPrompt: 'जिस ऐप का उपयोग आप कर चुके हैं, उसे आप कैसे बंद करेंगे?',
        successMessage: 'बिल्कुल सही!',
        successExplanation: 'बिना काम वाले ऐप्स को बंद रखने से आपका कंप्यूटर तेज़ चलता है और बैटरी भी बचती है।',
        wrongActions: [
          {
            id: 'click-minimize',
            alertTitle: 'थोड़ी कमी रह गई',
            alertMessage: 'मिनिमाइज़ (Minimize) करने से ऐप केवल छिप जाता है; वह अभी भी चल रहा होता है।',
            explanation: 'ऐप को पूरी तरह से बंद करने के लिए ऊपरी दाएं कोने में "X" बटन पर क्लिक करें।'
          }
        ]
      },
      tamil: {
        title: 'பேட்டரியைச் சேமித்தல்',
        saathiIntro: 'உங்கள் கணினியில் பல ஆப்கள் (Apps) திறந்துள்ளதால் அது மெதுவாகச் செயல்படுகிறது.',
        saathiPrompt: 'வேலை முடிந்த பிறகு ஒரு ஆப்பை எப்படி மூடுவீர்கள்?',
        successMessage: 'சரியாகச் சொன்னீர்கள்!',
        successExplanation: 'தேவையில்லாத ஆப்களை மூடுவது உங்கள் கணினியின் வேகத்தை அதிகரிக்கவும் பேட்டரியைச் சேமிக்கவும் உதவும்.',
        wrongActions: [
          {
            id: 'click-minimize',
            alertTitle: 'சரியாக இல்லை...',
            alertMessage: 'மினிமைஸ் (Minimize) செய்வது ஆப்பை மறைத்து வைக்குமே தவிர, அதை மூடாது.',
            explanation: 'ஒரு ஆப்பை முழுமையாக மூட, மேல் வலது மூலையில் உள்ள "X" பொத்தானைக் கிளிக் செய்யவும்.'
          }
        ]
      },
      telugu: {
        title: 'బ్యాటరీని ఆదా చేయడం',
        saathiIntro: 'మీరు చాలా యాప్‌లను తెరిచి ఉంచడం వల్ల మీ కంప్యూటర్ నెమ్మదిగా పని చేస్తోంది.',
        saathiPrompt: 'మీరు పని పూర్తి చేసిన యాప్‌ను ఎలా మూసివేస్తారు?',
        successMessage: 'ఖచ్చితంగా సరిగ్గా చెప్పారు!',
        successExplanation: 'ఉపయోగించని యాప్‌లను మూసివేయడం వల్ల కంప్యూటర్ వేగంగా పనిచేస్తుంది మరియు బ్యాటరీ ఆదా అవుతుంది.',
        wrongActions: [
          {
            id: 'click-minimize',
            alertTitle: 'కాస్త తప్పు...',
            alertMessage: 'మినిమైజ్ చేయడం వల్ల యాప్ కేవలం దాచబడుతుంది, కానీ అది ఇంకా రన్ అవుతూనే ఉంటుంది.',
            explanation: 'యాప్‌ను పూర్తిగా మూసివేయడానికి పైన కుడి మూలలో ఉన్న "X" బటన్‌పై క్లిక్ చేయండి.'
          }
        ]
      },
      kannada: {
        title: 'ಬ್ಯಾಟರಿ ಉಳಿಸುವುದು',
        saathiIntro: 'ನೀವು ಹಲವು ಆಪ್‌ಗಳನ್ನು ತೆರೆದಿಟ್ಟಿರುವುದರಿಂದ ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್ ನಿಧಾನವಾಗುತ್ತಿದೆ.',
        saathiPrompt: 'ಕೆಲಸ ಮುಗಿದ ನಂತರ ಆಪ್ ಅನ್ನು ಹೇಗೆ ಮುಚ್ಚುತ್ತೀರಿ?',
        successMessage: 'ಖಂಡಿತವಾಗಿಯೂ ಸರಿಯಾಗಿದೆ!',
        successExplanation: 'ಬಳಸದ ಆಪ್‌ಗಳನ್ನು ಮುಚ್ಚುವುದರಿಂದ ಕಂಪ್ಯೂಟರ್ ವೇಗವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು ಬ್ಯಾಟರಿ ಉಳಿಯುತ್ತದೆ.',
        wrongActions: [
          {
            id: 'click-minimize',
            alertTitle: 'ಸರಿಯಾಗಿಲ್ಲ...',
            alertMessage: 'ಮಿನಿಮೈಜ್ ಮಾಡಿದರೆ ಆಪ್ ಕೇವಲ ಅಡಗಿಕೊಳ್ಳುತ್ತದೆ; ಅದು ಇನ್ನೂ ಚಾಲನೆಯಲ್ಲಿರುತ್ತದೆ.',
            explanation: 'ಆಪ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಮುಚ್ಚಲು ಮೇಲ್ಭಾಗದ ಬಲ ಮೂಲೆಯಲ್ಲಿರುವ "X" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'save-file',
    title: 'Saving Your Work',
    category: 'basics',
    type: 'desktop',
    saathiIntro: 'You just finished typing a letter in a word processor.',
    saathiPrompt: 'How do you ensure your work isn\'t lost when you turn off the computer?',
    content: {
      hasUnsavedChanges: true
    },
    correctAction: 'click-file-save',
    wrongActions: [
      {
        id: 'click-shutdown',
        alertTitle: 'No!',
        alertMessage: 'Shutting down without saving will delete your unsaved work.',
        explanation: 'Always click on "File" > "Save" or the Floppy Disk icon before closing your work.'
      }
    ],
    successMessage: 'Good habit!',
    successExplanation: 'Saving writes your work onto the computer\'s storage permanently.',
    translations: {
      hindi: {
        title: 'अपना काम सुरक्षित (Save) करना',
        saathiIntro: 'आपने अभी एक वर्ड प्रोसेसर में पत्र टाइप करना समाप्त किया है।',
        saathiPrompt: 'आप यह कैसे सुनिश्चित करेंगे कि कंप्यूटर बंद करने पर आपका काम खो न जाए?',
        successMessage: 'अच्छी आदत!',
        successExplanation: 'सेव (Save) करने से आपका काम कंप्यूटर के स्टोरेज में स्थायी रूप से सुरक्षित हो जाता है।',
        wrongActions: [
          {
            id: 'click-shutdown',
            alertTitle: 'नहीं!',
            alertMessage: 'बिना सेव किए शटडाउन (Shutdown) करने से आपका अधूरा काम डिलीट हो जाएगा।',
            explanation: 'काम खत्म करने के बाद हमेशा "File" > "Save" या फ्लॉपी डिस्क (Floppy Disk) आइकन पर क्लिक करें।'
          }
        ]
      },
      tamil: {
        title: 'உங்கள் வேலையைச் சேமித்தல் (Saving)',
        saathiIntro: 'நீங்கள் ஒரு கடிதத்தைத் தட்டச்சு செய்து முடித்துவிட்டீர்கள்.',
        saathiPrompt: 'கணினியை அணைக்கும்போது உங்கள் வேலை அழியாமல் இருப்பதை எப்படி உறுதி செய்வீர்கள்?',
        successMessage: 'நல்ல பழக்கம்!',
        successExplanation: 'சேமிப்பது (Saving) உங்கள் வேலையைக் கணினியின் சேமிப்பகத்தில் நிரந்தரமாக வைத்திருக்கும்.',
        wrongActions: [
          {
            id: 'click-shutdown',
            alertTitle: 'வேண்டாம்!',
            alertMessage: 'சேமிக்காமல் கணினியை அணைத்தால் உங்கள் உழைப்பு வீணாகிவிடும்.',
            explanation: 'வேலையை முடித்த பிறகு எப்போதும் "File" > "Save" என்பதைக் கிளிக் செய்யவும்.'
          }
        ]
      },
      telugu: {
        title: 'మీ పనిని సేవ్ చేయడం',
        saathiIntro: 'మీరు ఇప్పుడే ఒక ఉత్తరాన్ని టైప్ చేయడం పూర్తి చేశారు.',
        saathiPrompt: 'కంప్యూటర్ ఆఫ్ చేసినప్పుడు మీ పని పోకుండా ఉండాలంటే మీరు ఏమి చేయాలి?',
        successMessage: 'మంచి అలవాటు!',
        successExplanation: 'సేవ్ చేయడం ద్వారా మీ పని కంప్యూటర్ స్టోరేజ్‌లో శాశ్వతంగా భద్రపరచబడుతుంది.',
        wrongActions: [
          {
            id: 'click-shutdown',
            alertTitle: 'వద్దు!',
            alertMessage: 'సేవ్ చేయకుండా షట్‌డౌన్ చేయడం వల్ల మీ పని డిలీట్ అయిపోతుంది.',
            explanation: 'పని ముగించే ముందు ఎప్పుడూ "File" > "Save" పై లేదా ఫ్లాపీ డిస్క్ ఐకాన్ పై క్లిక్ చేయండి.'
          }
        ]
      },
      kannada: {
        title: 'ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಉಳಿಸುವುದು (Saving)',
        saathiIntro: 'ನೀವು ಪತ್ರವನ್ನು ಟೈಪ್ ಮಾಡಿ ಮುಗಿಸಿದ್ದೀರಿ.',
        saathiPrompt: 'ಕಂಪ್ಯೂಟರ್ ಆಫ್ ಮಾಡಿದಾಗ ನಿಮ್ಮ ಕೆಲಸವು ಅಳಿಸಿಹೋಗದಂತೆ ಹೇಗೆ ಭದ್ರಪಡಿಸುತ್ತೀರಿ?',
        successMessage: 'ಒಳ್ಳೆಯ ಅಭ್ಯಾಸ!',
        successExplanation: 'ಸೇವ್ ಮಾಡುವುದರಿಂದ ನಿಮ್ಮ ಕೆಲಸವು ಕಂಪ್ಯೂಟರ್‌ನ ಸಂಗ್ರಹಣೆಯಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುತ್ತದೆ.',
        wrongActions: [
          {
            id: 'click-shutdown',
            alertTitle: 'ಬೇಡ!',
            alertMessage: 'ಉಳಿಸದೆ (Save ಮಾಡದೆ) ಕಂಪ್ಯೂಟರ್ ಆಫ್ ಮಾಡಿದರೆ ನಿಮ್ಮ ಕೆಲಸವು ಅಳಿಸಿಹೋಗುತ್ತದೆ.',
            explanation: 'ಕೆಲಸ ಮುಗಿದ ನಂತರ ಯಾವಾಗಲೂ "File" > "Save" ಅಥವಾ ಫ್ಲಾಪಿ ಡಿಸ್ಕ್ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.'
          }
        ]
      }
    }
  },
  {
    id: 'install-software',
    title: 'New Software',
    category: 'basics',
    type: 'app-install',
    saathiIntro: 'You downloaded a game setup file named "GameSetup.exe".',
    saathiPrompt: 'What is the standard step to begin the installation process?',
    content: {
      file: 'GameSetup.exe'
    },
    correctAction: 'double-click-exe',
    wrongActions: [
      {
        id: 'right-click-delete',
        alertTitle: 'Wait!',
        alertMessage: 'Deleting will remove the setup file.',
        explanation: 'Opening or double-clicking the .exe file starts the installation wizard for new software.'
      }
    ],
    successMessage: 'Let\'s go!',
    successExplanation: 'Installation sets up the software so it\'s ready to use on your system.',
    translations: {
      hindi: {
        title: 'नया सॉफ्टवेयर इंस्टॉल करना',
        saathiIntro: 'आपने "GameSetup.exe" नाम की एक गेम सेटअप फाइल डाउनलोड की है।',
        saathiPrompt: 'इंस्टॉलेशन प्रक्रिया शुरू करने के लिए मानक कदम क्या है?',
        successMessage: 'चलिए शुरू करते हैं!',
        successExplanation: 'इंस्टॉलेशन सॉफ्टवेयर को इस तरह तैयार करता है कि वह आपके सिस्टम पर उपयोग के लिए तैयार हो जाए।',
        wrongActions: [
          {
            id: 'right-click-delete',
            alertTitle: 'रुकें!',
            alertMessage: 'डिलीट करने से सेटअप फाइल हट जाएगी।',
            explanation: 'नए सॉफ्टवेयर के लिए इंस्टॉलेशन विज़ार्ड शुरू करने के लिए .exe फाइल पर डबल-क्लिक करें।'
          }
        ]
      },
      tamil: {
        title: 'புதிய மென்பொருள் (Software)',
        saathiIntro: '"GameSetup.exe" என்ற கேம் செட்டப் கோப்பை நீங்கள் பதிவிறக்கம் செய்துள்ளீர்கள்.',
        saathiPrompt: 'இன்ஸ்டால் செய்யும் முறையைத் தொடங்க நீங்கள் என்ன செய்வீர்கள்?',
        successMessage: 'தொடங்குவோம்!',
        successExplanation: 'இன்ஸ்டாலேஷன் என்பது ஒரு மென்பொருளை உங்கள் கணினியில் பயன்படுத்துவதற்குத் தயாராக அமைப்பதாகும்.',
        wrongActions: [
          {
            id: 'right-click-delete',
            alertTitle: 'காத்திருங்கள்!',
            alertMessage: 'நீக்கினால் செட்டப் கோப்பு அழிந்துவிடும்.',
            explanation: '.exe கோப்பை இருமுறை கிளிக் செய்வது புதிய மென்பொருளுக்கான இன்ஸ்டாலேஷன் முறையைத் தொடங்கும்.'
          }
        ]
      },
      telugu: {
        title: 'కొత్త సాఫ్ట్‌వేర్',
        saathiIntro: 'మీరు "GameSetup.exe" అనే గేమ్ సెటప్ ఫైల్‌ను డౌన్‌లోడ్ చేశారు.',
        saathiPrompt: 'ఇన్‌స్టాలేషన్ ప్రక్రియను ప్రారంభించడానికి సాధారణంగా ఏమి చేయాలి?',
        successMessage: 'మొదలు పెడదాం!',
        successExplanation: 'ఇన్‌స్టాలేషన్ చేయడం వల్ల సాఫ్ట్‌వేర్ మీ సిస్టమ్‌లో ఉపయోగించడానికి సిద్ధంగా ఉంటుంది.',
        wrongActions: [
          {
            id: 'right-click-delete',
            alertTitle: 'ఆగండి!',
            alertMessage: 'డిలీట్ చేస్తే సెటప్ ఫైల్ తొలగిపోతుంది.',
            explanation: '.exe ఫైల్‌పై డబుల్ క్లిక్ చేయడం ద్వారా కొత్త సాఫ్ట్‌వేర్ ఇన్‌స్టాలేషన్ ప్రారంభమవుతుంది.'
          }
        ]
      },
      kannada: {
        title: 'ಹೊಸ ಸಾಫ್ಟ್‌ವೇರ್',
        saathiIntro: 'ನೀವು "GameSetup.exe" ಎಂಬ ಗೇಮ್ ಸೆಟಪ್ ಫೈಲ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದ್ದೀರಿ.',
        saathiPrompt: 'ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ನೀವು ಮೊದಲು ಏನು ಮಾಡುತ್ತೀರಿ?',
        successMessage: 'ಪ್ರಾರಂಭಿಸೋಣ!',
        successExplanation: 'ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಮಾಡುವುದರಿಂದ ಸಾಫ್ಟ್‌ವೇರ್ ನಿಮ್ಮ ಗಣಕಯಂತ್ರದಲ್ಲಿ ಬಳಸಲು ಸಿದ್ಧವಾಗುತ್ತದೆ.',
        wrongActions: [
          {
            id: 'right-click-delete',
            alertTitle: 'ಕಾಯಿರಿ!',
            alertMessage: 'ಡಿಲೀಟ್ ಮಾಡಿದರೆ ಸೆಟಪ್ ಫೈಲ್ ಅಳಿಸಿಹೋಗುತ್ತದೆ.',
            explanation: '.exe ಫೈಲ್ ಮೇಲೆ ಡಬಲ್ ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ಸಾಫ್ಟ್‌ವೇರ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಪ್ರಕ್ರಿಯೆ ಆರಂಭವಾಗುತ್ತದೆ.'
          }
        ]
      }
    }
  },
  {
    id: 'create-file',
    title: 'Starting a Document',
    category: 'basics',
    type: 'desktop',
    saathiIntro: 'Abhi, you need to write a quick note for your groceries.',
    saathiPrompt: 'How would you create a new empty Text Document on your desktop?',
    content: {
      files: []
    },
    correctAction: 'right-click-new-text',
    wrongActions: [
      {
        id: 'click-bin',
        alertTitle: 'Wrong Place',
        alertMessage: 'The Bin is for deleted files.',
        explanation: 'Right-click on an empty space, select "New", and then "Text Document" to start a new file.'
      }
    ],
    successMessage: 'Great start!',
    successExplanation: 'Now you can open it and start typing your list!',
    translations: {
      hindi: {
        title: 'डॉक्यूमेंट शुरू करना',
        saathiIntro: 'अभि, आपको किराने के सामान के लिए एक झटपट नोट लिखना है।',
        saathiPrompt: 'आप अपने डेस्कटॉप पर एक नया खाली टेक्स्ट डॉक्यूमेंट कैसे बनाएंगे?',
        successMessage: 'बहतरीन शुरुआत!',
        successExplanation: 'अब आप इसे खोल सकते हैं और अपनी लिस्ट टाइप करना शुरू कर सकते हैं!',
        wrongActions: [
          {
            id: 'click-bin',
            alertTitle: 'गलत जगह',
            alertMessage: 'बिन (Bin) डिलीट की गई फाइलों के लिए है।',
            explanation: 'खाली जगह पर राइट-क्लिक करें, "नया" (New) चुनें, और फिर एक नई फाइल शुरू करने के लिए "टेक्स्ट डॉक्यूमेंट" चुनें।'
          }
        ]
      },
      tamil: {
        title: 'ஒரு ஆவணத்தைத் தொடங்குதல்',
        saathiIntro: 'அபி, நீங்கள் மளிகைப் பொருட்களுக்காகச் சிறு குறிப்பு எழுத வேண்டும்.',
        saathiPrompt: 'உங்கள் டெஸ்க்டாப்பில் ஒரு புதிய வெற்று உரை ஆவணத்தை (Text Document) எப்படி உருவாக்குவீர்கள்?',
        successMessage: 'சிறந்த தொடக்கம்!',
        successExplanation: 'இப்போது நீங்கள் அதைத் திறந்து உங்கள் பட்டியலைத் தட்டச்சு செய்யத் தொடங்கலாம்!',
        wrongActions: [
          {
            id: 'click-bin',
            alertTitle: 'தவறான இடம்',
            alertMessage: 'மறுசுழற்சித் தொட்டி (Bin) நீக்கப்பட்ட கோப்புகளுக்கானது.',
            explanation: 'வெற்று இடத்தில் ரைட்-கிளிக் செய்து, "New" என்பதைத் தேர்ந்தெடுத்து, பிறகு "Text Document" என்பதைத் தேர்ந்தெடுக்கவும்.'
          }
        ]
      },
      telugu: {
        title: 'డాక్యుమెంట్‌ను ప్రారంభించడం',
        saathiIntro: 'అభి, మీరు కిరాణా సామానుల కోసం ఒక చిన్న నోట్ రాయాలి.',
        saathiPrompt: 'మీ డెస్క్‌టాప్ మీద కొత్త టెక్స్ట్ డాక్యుమెంట్ ఎలా సృష్టిస్తారు?',
        successMessage: 'మంచి ప్రారంభం!',
        successExplanation: 'ఇప్పుడు మీరు దాన్ని తెరిచి మీ లిస్ట్ రాయవచ్చు!',
        wrongActions: [
          {
            id: 'click-bin',
            alertTitle: 'తప్పు స్థలం',
            alertMessage: 'బిన్ (Bin) అనేది డిలీట్ చేసిన ఫైళ్ల కోసం.',
            explanation: 'ఖాళీ ప్రదేశంలో రైట్ క్లిక్ చేసి, "New", ఆపై "Text Document" ఎంచుకోండి.'
          }
        ]
      },
      kannada: {
        title: 'ಡಾಕ್ಯುಮೆಂಟ್ ಪ್ರಾರಂಭಿಸುವುದು',
        saathiIntro: 'ಅಭಿ, ನೀವು ದಿನಸಿ ಸಾಮಗ್ರಿಗಳಿಗಾಗಿ ಒಂದು ಸಣ್ಣ ಟಿಪ್ಪಣಿ ಬರೆಯಬೇಕಾಗಿದೆ.',
        saathiPrompt: 'ನಿಮ್ಮ ಡೆಸ್ಕ್‌ಟಾಪ್ ಮೇಲೆ ಹೊಸ ಟೆಕ್ಸ್ಟ್ ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು ಹೇಗೆ ರಚಿಸುತ್ತೀರಿ?',
        successMessage: 'ಉತ್ತಮ ಆರಂಭ!',
        successExplanation: 'ಈಗ ನೀವು ಅದನ್ನು ತೆರೆದು ನಿಮ್ಮ ಪಟ್ಟಿಯನ್ನು ಬರೆಯಲು ಪ್ರಾರಂಭಿಸಬಹುದು!',
        wrongActions: [
          {
            id: 'click-bin',
            alertTitle: 'ತಪ್ಪು ಜಾಗ',
            alertMessage: 'ಬಿನ್ (Bin) ಅಳಿಸಿದ ಫೈಲ್‌ಗಳಿಗಾಗಿ ಇರುತ್ತದೆ.',
            explanation: 'ಖಾಲಿ ಜಾಗದಲ್ಲಿ ರೈಟ್ ಕ್ಲಿಕ್ ಮಾಡಿ, "New" ಮತ್ತು ನಂತರ "Text Document" ಆಯ್ಕೆಮಾಡಿ.'
          }
        ]
      }
    }
  }
];
