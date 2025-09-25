const originalQuestions = [
  { q: "What factors affect the Maximum Usable Frequency (MUF)?",
    a: ["Time of day and season", "Path distance and location", "Solar radiation and ionospheric disturbances", "All of the choices"],
    correct: 3
  },
  { q: "Which of the following is the purpose of a beacon station?",
    a: ["Identifying net frequencies","Automatic identification of repeaters","Observation of propagation and reception","Transmission of bulletins of general interest to Amateur Radio licensees"],
    correct: 2
  },
  { q: "How does the NTC require an amateur station to be operated in all respects not specifically covered by the Amateur rules and regulations?",
    a: ["In conformance with good engineering and good amateur practice","In conformance with the rules of the IARU","In conformance with Amateur Radio custom","All of these choices are correct"],
    correct: 3
  },
  { q: "What is the meaning of the Q signal “QTH”?",
    a: ["Time here is","My name is","Stop sending","My location is"],
    correct: 3
  },
  { q: "Which of the following antenna types will be most effective for skip communications on 40 meters during the day?",
    a: ["Left-hand circularly polarized antennas","Right-hand circularly polarized antenna","Vertical antennas","Horizontal dipoles placed between 1/8 and ¼ wavelength above the ground"],
    correct: 3
  },
  { q: "What does “monitoring” mean on a packet-radio frequency?",
    a: ["The NTC is listening","The Philippine Amateur Radio Association is listening","A receiving station is displaying all messages sent to it and replying that the messages are being received correctly","A receiving station is displaying messages that may not necessarily be sent to it and is not replying to any message"],
    correct: 3
  },
  { q: "What is one way to shorten transmitter tune up time on the air to cut down on interference?",
    a: ["Use a random wire antenna","Tune up on 40 meters first, then switch to the desired band","Tune the transmitter into a dummy load","Use twin lead instead of co-axial feed lines"],
    correct: 2
  },
  { q: "Which of the following is a recommended way to break into a conversation when using phone?",
    a: ["Say “Break, Break, Break.” and wait for a response","Say your call sign during a break between transmissions from the other stations","Say “QRZ” several times followed by your call sign","Say “CQ” followed by the call sign of either station"],
    correct: 1
  },
  { q: "How should you answer a voice CQ call?",
    a: ["Say to the other station’s call sign at least ten times, followed by “this is” then your call sign at least twice","Say the other station’s call sign at least five times phonetically, followed by “this is” then your call sign once","Say the other station’s call sign at least three times followed by “this is” then your call sign at least five times phonetically","Say the other station’s call sign once, followed by “this is” then your call sign given phonetically"],
    correct: 3
  },
  { q: "What is the correct way to call CQ when using voice?",
    a: ["Say “CQ” once followed by “this is”, followed by your call sign spoken thrice","Say “CQ” five times followed by “this is”, followed by your call sign spoken once","Say “CQ” thrice followed by “this is”, followed by your call sign spoken thrice","Say “CQ” ten times followed by “this is”, followed by your call sign spoken once"],
    correct: 2
  },
  { q: "If you make contact with another station and your signal is extremely strong and perfectly readable, what adjustment might you make to your transmitter?",
    a: ["Turn on your speech processor","Reduce your SWR","Continue with your contact, making no changes","Turn down your power output to the minimum necessary"],
    correct: 3
  },
  { q: "What is meant my the term “DX”?",
    a: ["Best regards","Distant station","Calling any station","Go ahead"],
    correct: 1
  },
  { q: "What is the meaning of the procedural signal “DE”?",
    a: ["“From” or “this is”","“directional emissions” from your antenna","“received all correctly”","“calling any station”"],
    correct: 0
  },
  { q: "At what speed should a Morse code CQ call be transmitted?",
    a: ["Only speeds below five WPM","The highest speed your keyer will operate","any speed at which you can reliably receive","the highest speed at which you can control the keyer"],
    correct: 2
  },
  { q: "What standing wave ratio will result from the connection of a 50-ohm feed line to a non-reactive load having a 200-ohm impedance?",
    a: ["1:02","1:04","2:01","4:01"],
    correct: 3
  },
  { q: "What are RST signal reports?",
    a: ["A short way of describing conditions of the ionosphere","A short way to describe transmitter power","A short way to describe signal reception","A short way to describe sunspot activity"],
    correct: 2
  },
  { q: "What is a QSL card?",
    a: ["A letter or postcard for an amateur pen pal","A notice of violation sent by the NTC","A written proof of communication between two amateurs","A postcard reminding you when your license will expire"],
    correct: 2
  },
  { q: "An SDR is a radio communication system ... What does SDR stand for?",
    a: ["Special Drawing Rights","Supply Discrepancy Report","Software Defined Requirement","Software Defined Radio"],
    correct: 3
  },
  { q: "When may an amateur station transmit communications in which the licensee has a pecuniary (monetary) interest?",
    a: ["To announce sale of apparatus normally used in an amateur station and such activity is not done on a regular basis","Notice of the sale of any item with a monetary value less than P1,000 and such activity is not done on a regular basis","When there is no other means of communication readily available","Never"],
    correct: 3
  },
  { q: "What is the correct way to call CQ when using Morse code?",
    a: ["Send the letters “CQ” three times, followed by “DE”, followed by your call sign sent once","Send the letters “CQ” three times, followed by “DE”, followed by your call sign sent three times","Send the letters “CQ” ten times, followed by “DE”, followed by your call sign sent once","Send the letters “CQ” over and over"],
    correct: 0
  },
  { q: "What is the meaning of procedural signal “CQ”?",
    a: ["Call on the quarter hour","New antenna being tested","Only the called station should respond","Calling any station"],
    correct: 3
  },
  { q: "What is the speed you should use when answering a CQ call using RTTY?",
    a: ["Half the speed of the received signal","The same speed as the received signal","Twice the speed of the received signal","Any speed since RTTY systems adjust to any signal speed"],
    correct: 1
  },
  { q: "What is the effect on an audio device or telephone system if there is interference from a nearby CW transmitter?",
    a: ["On-and-off humming or clicking","A chirpy CW signal","A CW signal at a nearly pure audio frequency","Severely distorted audio"],
    correct: 0
  },
  { q: "What should you do before you transmit on any frequency?",
    a: ["Listen to make sure others are not using the frequency","Listen to make sure that someone will be able to hear you","Check your antenna for resonance at the selected frequency","Make sure the SWR on your antenna feed line is high enough"],
    correct: 0
  },
  { q: "What is the correct way to call CQ when using RTTY?",
    a: ["Send the letters “CQ” thrice, followed by “DE”, followed by your call sign sent once","Send the letters “CQ” three to six times, followed by “DE”, followed by your call sign sent thrice","Send the letters “CQ” ten times, followed by “DE”, followed by your call sign sent once","Send the letters “CQ” over and over"],
    correct: 0
  },
  { q: "How does the feed-point impedance of a ½ wave dipole antenna change as the antenna is lowered from ¼ wave above ground?",
    a: ["It peaks at about 1/8 wavelength above ground","It steadily increases","It steadily decreases","It is unaffected by the height above ground"],
    correct: 2
  },
  { q: "To make your call sign easily copied when using voice transmissions, what should you do?",
    a: ["Use standard international phonetics for each letter of your call sign","Use any words which start with the same letters as your call sign for each letter of your call","Talk louder","Turn up the microphone gain"],
    correct: 0
  },
  { q: "What does the expression “CQ DX” usually mean?",
    a: ["A distress call","The caller is listening for a station in Germany","The caller is listening for a Philippine club station","The caller is looking for any station outside their own country"],
    correct: 3
  },
  { q: "Which of the following is a use for the IF shift control on a receiver?",
    a: ["To change frequency rapidly","To tune in stations that are slightly off frequency without changing your transmit frequency","To avoid interference from stations very close to the receive frequency","To permit listening on a different frequency from that on which you are transmitting"],
    correct: 2
  },
  { q: "What is the meaning of the Q signal “QRS”?",
    a: ["Interference from static","Send more slowly","Send RST report","Radio station location is"],
    correct: 1
  },
  { q: "Which of the following is a disadvantage of multi band antennas?",
    a: ["They have poor harmonic rejection","They must be used with an antenna tuner","They must be fed with open wire line","They present low impedance on all design frequencies"],
    correct: 0
  },
  { q: "When is an amateur station allowed to use any means at its disposal to assist another station in distress?",
    a: ["At any time when transmitting in an organized net","Only on authorized HF frequencies","Only when transmitting in an emergency net","At any time during an actual emergency"],
    correct: 3
  },
  { q: "Which of the following direct fused power connections would be the best for a 100-watt HF mobile installation?",
    a: ["To the alternator or generator using heavy gauge wire","To the battery using heavy gauge wire","To the alternator or generator using resistor wire","To the battery using resistor wire"],
    correct: 1
  },
  { q: "Which of the following frequencies is available to an amateur radio operator holding a General Class license?",
    a: ["28.020 MHz","28.350 MHz","29.000 MHz","All of the choices are correct"],
    correct: 3
  },
  { q: "Which of these connector types is commonly used for RF service at frequencies up to 146 MHz",
    a: ["Octal","RJ-11","DB-25","PL-259"],
    correct: 3
  },
  { q: "What would be the SWR if you feed a vertical antenna that has a 25-ohm feed point impedance with 50-ohm coaxial cable?",
    a: ["1:04","2:01","You cannot measure the SWR from impedance values","2.5:1"],
    correct: 1
  },
  { q: "What is meant by the term “73”?",
    a: ["Long distance","Best regards","Love and kisses","Go ahead"],
    correct: 1
  },
  { q: "What is the speed of Morse Code proficiency testing for Class B?",
    a: ["5 WPM","8 WPM","12 WPM","None"],
    correct: 3
  },
  { q: "Which of the following devices can be used for impedance matching at radio frequencies?",
    a: ["A length of transmission line","A Pi-network","A transformer","All of the choices"],
    correct: 3
  },
  { q: "How should you answer a Morse code CQ call?",
    a: ["Send your call sign four times","Send the other station’s call sign twice, followed by “DE”, followed by your call sign twice","Send the other station’s call sign once, followed by “DE”, followed by your call sign four times","Send your call sign, followed by your name, station location and a signal report"],
    correct: 1
  },
  { q: "If you are in contact with another station and you hear an emergency call for help on your frequency, what should you do?",
    a: ["Tell the calling station that the frequency is in use","Direct the calling station to the nearest emergency net frequency","Call your local police or fire station and inform them of the emergency","Stop your QSO immediately and take the emergency call"],
    correct: 3
  },
  { q: "What is the meaning of the procedural sign “K”?",
    a: ["“any station transmit”","“all received correctly”","“end of message”","“called station only, transmit”"],
    correct: 0
  },
  { q: "What effect does a sudden Ionospheric Disturbance have on the daytime ionospheric propagation of HF radio waves?",
    a: ["It disrupts communications via satellite more than direct communications","It disrupts signals on lower frequencies more than those on higher frequencies","It enhances propagation on all HF frequencies","None, because only areas on the night side of the Earth are affected"],
    correct: 1
  },
  { q: "What does “connected” mean in a packet-radio link?",
    a: ["A telephone link is working between the two stations","A message has reached an amateur station for local delivery","A transmitting station is sending data to only one receiving station; it replies that the data is being received correctly","A transmitting and receiving station are using a digipeater, so no other contacts can take place until they are finished"],
    correct: 2
  },
  { q: "What information is contained in a station log?",
    a: ["Date and time of contact","Call sign of station contacted and the signal report given","Band and/or frequency of the contact","All of the choices are correct"],
    correct: 3
  },
  { q: "What is the maximum symbol rate permitted for RTTY or data emission transmissions on the 10 meter band?",
    a: ["56 kilobaud","9.6 kilobaud","1200 baud","300 baud"],
    correct: 2
  },
  { q: "What is a digipeater?",
    a: ["A packet-radio station that re-transmits only data that is marked to be re-transmitted","A packet-radio that re-transmits any data that it receives","A repeater that changes audio signals to digital data","A repeater built using only digital electronic parts"],
    correct: 1
  },
  { q: "What does RST mean when giving a signal report?",
    a: ["Recovery, signal strength, tempo","Recovery, signal speed, tone","Readability, signal speed, tempo","Readability, signal strength, tone"],
    correct: 3
  },
  { q: "What types of messages for a third party in another country may be transmitted by an amateur station?",
    a: ["Only message for other licensed amateurs","Any message, as long as the amateur operator is not paid","Any message, as long as the text of the message is recorded in the station log","Only messages relating to Amateur Radio or remarks of a personal character, or messages relating to emergencies or disaster relief"],
    correct: 3
  },
  { q: "What is the first thing you should do if you are communicating with another amateur station and hear a station in distress break in?",
    a: ["Change to a different frequency","Immediately cease all transmissions","Acknowledge the station in distress and determine what assistance may be needed","Continue your communication because you were on frequency first"],
    correct: 2
  }
];
