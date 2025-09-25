// elementVQuestions.js
// ELEMENT V – Signals, Frequencies and Emission
// Format: { q: "Question?", a: ["A. ...","B. ...","C. ...","D. ..."], correct: <index of correct choice> }

const originalQuestions = [
  { q: "If the radiation resistance of the antenna is 5000 ohms, the power radiated is 125 kilowatts, what is the antenna current?",
    a: ["A. 2 A","B. 3 A","C. 4 A","D. 5 A"], correct: 3 },

  { q: "Ratio of the maximum deviation to modulating frequency",
    a: ["A. frequency ratio","B. modulation index","C. deviation factor","D. phase constant"], correct: 1 },

  { q: "An example of the worst kind of antenna and transmission matching is shown by SWR reading",
    a: ["A. 1:1","B. 1:10","C. 1:100","D. 1:1000"], correct: 3 },

  { q: "Undesired oscillations developed in RF amplifier circuit at some frequency higher than normal operating frequency",
    a: ["A. drift","B. parasitic","C. harmonic","D. spurious"], correct: 1 },

  { q: "UHF frequency falls within the band",
    a: ["A. 30-300 MHz","B. 300-3000 MHz","C. 3-30 GHz","D. 30-300 kHz"], correct: 1 },

  { q: "If a 10 kHz tone is transmitted and the modulation index is 7.5, what is value of maximum deviation?",
    a: ["A. 50 kHz","B. 65 kHz","C. 75 kHz","D. 100 kHz"], correct: 2 },

  { q: "To overcome language barrier ______ is used",
    a: ["A. Q code","B. Morse","C. ASCII","D. Phonetics only"], correct: 0 },

  { q: "The actual length of the radiating element in a Marconi antenna is",
    a: ["A. one-half","B. one-quarter","C. three-quarter","D. full wave"], correct: 1 },

  { q: "A device used for producing FM in transmitter",
    a: ["A. varactor","B. reactance modulator","C. balanced modulator","D. mixer"], correct: 1 },

  { q: "Frequency bands used mostly for groundwave propagation such as AM broadcast stations",
    a: ["A. 30-300 kHz","B. 300-3000 kHz","C. 3-30 MHz","D. 300-3000 MHz"], correct: 1 },

  { q: "Any unwanted form of energy tending to interfere with the proper and easy reception and reproduction of wanted signals",
    a: ["A. noise","B. harmonic","C. spurious","D. drift"], correct: 0 },

  { q: "The use of ionosphere in wave propagation utilizes mostly this kind of radio wave",
    a: ["A. ground waves","B. space waves","C. sky waves","D. direct waves"], correct: 2 },

  { q: "Microwave propagation makes use of",
    a: ["A. sky wave","B. space wave","C. ground wave","D. skip wave"], correct: 1 },

  { q: "The three basic parts of transistors is base, collector and",
    a: ["A. anode","B. emitter","C. cathode","D. plate"], correct: 1 },

  { q: "Communication involving distress should not exceed",
    a: ["A. 12 wpm","B. 14 wpm","C. 16 wpm","D. 18 wpm"], correct: 2 },

  { q: "In radioteletype transmission, either ASCII or ________ is used",
    a: ["A. Baudot","B. EBCDIC","C. Unicode","D. Morse"], correct: 0 },

  { q: "The majority carrier in P-type semiconductor materials are",
    a: ["A. electrons","B. holes","C. protons","D. ions"], correct: 1 },

  { q: "The power formula is",
    a: ["A. P=EI or P=I^2R","B. P=E/I","C. P=E/R","D. P=IR"], correct: 0 },

  { q: "What is the ratio of collector current to base current of a transistor?",
    a: ["A. Alpha","B. Beta","C. Gamma","D. Delta"], correct: 1 },

  { q: "Half-power points are also known as",
    a: ["A. 1 dB points","B. 2 dB points","C. 3 dB points","D. 6 dB points"], correct: 2 },

  { q: "Emission of an unmodulated carrier",
    a: ["A. A","B. N","C. R","D. C"], correct: 1 },

  { q: "Emission in which the wave carrier is amplitude modulated, single side band (SSB) reduced carrier",
    a: ["A. A","B. B","C. R","D. C"], correct: 2 },

  { q: "Emission in which wave carrier is amplitude modulated SSB, vestigial side bands",
    a: ["A. A","B. B","C. C","D. R"], correct: 2 },

  { q: "Emission in which the wave carrier is amplitude modulated, full carrier",
    a: ["A. A","B. N","C. C","D. R"], correct: 0 },

  { q: "The RMS value of a sine wave form is equal to",
    a: ["A. 50% of peak","B. 63% of peak","C. 70.7 percent of the peak value of the wave","D. 90% of peak"], correct: 2 },

  { q: "What is the ratio of unmodulated carrier power to instantaneous peak power at 100% modulation?",
    a: ["A. 10%","B. 25 percent","C. 50%","D. 75%"], correct: 1 },

  { q: "What is the operating frequency of the transceiver if the radio wave is 6 meters long?",
    a: ["A. 30 MHz","B. 50 MHz","C. 60 MHz","D. 600 MHz"], correct: 1 },

  { q: "The frequency band most suitable for propagation using the ionosphere is",
    a: ["A. LF","B. MF","C. HF","D. UHF"], correct: 2 },

  { q: "Ratio of maximum deviation allowed to the modulating frequency is",
    a: ["A. phase ratio","B. modulation index","C. bandwidth ratio","D. frequency swing"], correct: 1 },

  { q: "The most ideal SWR in VHF communications",
    a: ["A. 1:1 SWR","B. 1:2 SWR","C. 1:3 SWR","D. 1:4 SWR"], correct: 0 },

  { q: "Second harmonic of 500 kHz",
    a: ["A. 750 kHz","B. 900 kHz","C. 1000 kHz","D. 1500 kHz"], correct: 2 },

  { q: "Two forms of angle modulation are frequency modulation and ________ modulation",
    a: ["A. phase","B. amplitude","C. pulse","D. time"], correct: 0 },

  { q: "F3 emission means carrier is",
    a: ["A. amplitude modulated","B. frequency modulated by voice","C. phase modulated","D. unmodulated"], correct: 1 },

  { q: "To overcome difficulty in spelling, the _____ is used",
    a: ["A. Morse","B. phonetic alphabet","C. Q code","D. ASCII"], correct: 1 },

  { q: "Which diodes are normally reversed biased?",
    a: ["A. Zener diode","B. LED","C. Varactor","D. Schottky"], correct: 0 },

  { q: "The symbol used for current amplification factor of transistors is",
    a: ["A. alpha","B. beta","C. gamma","D. kappa"], correct: 1 },

  { q: "A circuit element that opposes change in current",
    a: ["A. capacitor","B. resistor","C. inductor","D. diode"], correct: 2 },

  { q: "Radiation occurring on frequencies which are whole multiple of the original desired frequency is called",
    a: ["A. harmonic","B. parasitic","C. spurious","D. beat"], correct: 0 },

  { q: "Undesired oscillations developed in a radio frequency amplifier circuit at some frequency are called",
    a: ["A. parasitic","B. harmonic","C. drift","D. resonance"], correct: 0 },

  { q: "Ideal value of signal to noise ratio",
    a: ["A. zero","B. one","C. infinity","D. ten"], correct: 2 },

  { q: "Frequency range between two half-power points is",
    a: ["A. bandwidth","B. passband","C. cutoff","D. center frequency"], correct: 0 },

  { q: "How long is the antenna using a frequency which is the 2nd harmonic of the frequency of one meter antenna?",
    a: ["A. 1 meter","B. 0.75 meter","C. 0.50 meter","D. 0.25 meter"], correct: 2 },

  { q: "The sum of the carrier frequency and the side band frequency of an amplitude modulated carrier signal",
    a: ["A. Lower side bands","B. Upper side bands","C. Baseband","D. Mid-band"], correct: 1 },

  { q: "If you decrease the percentage of modulation from 100% to 50%, by what % have you decreased the power in the side bands?",
    a: ["A. 25","B. 50","C. 75","D. 100"], correct: 0 },

  { q: "A frequency band most suitable for ground wave propagation",
    a: ["A. LF","B. MF","C. HF","D. UHF"], correct: 1 },

  { q: "The frequency bands normally used for the line of sight (LOS) propagation",
    a: ["A. 3-30 MHz","B. 30-300 MHz","C. 300-3000 MHz","D. 3-30 kHz"], correct: 1 },

  { q: "What emission designation is one in which the main carrier is frequency modulated, while modulated by a single channel containing quantized information without the use of a modulating sub carrrier?",
    a: ["A. A","B. F","C. N","D. R"], correct: 1 },

  { q: "Polarization of antenna used in high frequency propagation is normally",
    a: ["A. horizontal","B. vertical","C. circular","D. elliptical"], correct: 0 },

  { q: "Balanced modulator is a device used to",
    a: ["A. suppress the carrier in SSB transmitter","B. double the frequency","C. mix two signals","D. modulate amplitude only"], correct: 0 },

  { q: "A frequency of a transmitted signal wherein the reflected signals disappear and are no longer reflected back to earth",
    a: ["A. critical frequency","B. cutoff frequency","C. skip frequency","D. iono limit"], correct: 0 },

  { q: "Another name for indirect FM",
    a: ["A. phase modulation","B. direct FM","C. amplitude modulation","D. digital FM"], correct: 0 },

  { q: "Radiation occurring on frequencies which a whole or multiple of occupied divided frequency is called",
    a: ["A. harmonic","B. parasitic","C. spurious","D. beat"], correct: 0 }
];
