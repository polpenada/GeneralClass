const originalQuestions = [
  {
    q: "A sine wave was measured to have a 20 Volt peak measurement. What is the peak-to-peak voltage that can be measured from this wave?",
    a: ["40 Volts", "20 Volts", "10 Volts", "14.14 Volts"],
    correct: 0
  },
  {
    q: "From the choices listed, what emission type do Amateur Radio Operators in the 430 MHz band commonly use to communicate locally with using voice communications or telephony?",
    a: ["QPSK", "FSK", "CW", "FM"],
    correct: 3
  },
  {
    q: "How many symbols does the binary numbering system have?",
    a: ["2", "10", "16", "32"],
    correct: 0
  },
  {
    q: "Most television signals employ vestigial sideband transmission __________",
    a: [
      "to conserve bandwidth",
      "allow low frequency content such as screen brightness and scanning synchronizing pulses",
      "both A and B",
      "none of the above"
    ],
    correct: 1
  },
  {
    q: "What is the approximate length of a half-wave dipole antenna for 28.495 MHz?",
    a: ["10.52 meters", "2.63 meters", "5.26 meters", "28.495 meters"],
    correct: 2
  },
  {
    q: "What is the device that converts digital signal into audible tones suitable for voice grade channel transmission and reception?",
    a: ["Modem", "Telephone", "Microphone", "Speaker"],
    correct: 0
  },
  {
    q: "MODEM is short for __________",
    a: ["Mode Modulator", "Modulator/Demodulator", "Modulator/Demultiplexer", "none of the above"],
    correct: 1
  },
  {
    q: "Key clicks in CW reception is caused by __________",
    a: [
      "Poor quality morse key or paddle",
      "Over-driving the final amplifier",
      "Instantaneous transmission of full carrier power",
      "none of the above"
    ],
    correct: 0
  },
  {
    q: "What is the harmonic frequency of a signal having 14.28751 meters wavelength?",
    a: ["7095 kHz", "21010 kHz", "42000 kHz", "14005 kHz"],
    correct: 3
  },
  {
    q: "What is commonly known as RTTY can be _________",
    a: ["F1B and F2B", "C3F", "A1A", "F3E"],
    correct: 3
  },
  {
    q: "Which of the following is an effect of over-modulation?",
    a: ["Excessive bandwidth", "Insufficient audio", "Insufficient bandwidth", "Frequency drift"],
    correct: 3
  },
  {
    q: "The best method in suppressing the carrier and unwanted sideband is filtering with __________",
    a: ["LC filter", "Crystal filter", "Mechanical filter", "both B and C"],
    correct: 3
  },
  {
    q: "“CQ 40m CQ 40m” was and is still heard on radio. The band is mentioned in the call because __________",
    a: [
      "in the early days of radio, there was poor suppression of harmonics that sometimes a person can copy the harmonic on a higher band and think it is the actual transmission",
      "It sounds clearer",
      "it is required by law",
      "it is the international practice"
    ],
    correct: 0
  },
  {
    q: "If you have an amplitude modulated signal and feed it into a filter to remove the carrier and any signals below the carrier frequency you will get a __________",
    a: ["FM signal", "lower sideband signal", "upper sideband signal", "pulsed signal"],
    correct: 2
  },
  {
    q: "In the early days of radio, an audio amplifier’s output was fed into the plate circuit of a CW RF power amplifier and this essentially became an __________",
    a: ["FM transmitter", "AM transmitter", "single sideband transmitter", "CW transmitter"],
    correct: 1
  },
  {
    q: "The difference between A3E and J3E is __________",
    a: [
      "the latter’s carrier is suppressed",
      "the latter has double sidebands",
      "the former has one sideband only",
      "the former has a single sideband"
    ],
    correct: 0
  },
  {
    q: "The difference between FSK and AFSK is __________",
    a: [
      "none",
      "first one uses a modulated subcarrier while the other does not",
      "the former is asynchronous",
      "you cannot generate an AFSK outside the radio"
    ],
    correct: 1
  },
  {
    q: "What is the term used for the multiple of a fundamental frequency?",
    a: ["Harmonic Frequency", "Multiple Frequency", "High Frequency", "Medium Frequency"],
    correct: 0
  },
  {
    q: "A1 emission is __________",
    a: [
      "aural telegraphy",
      "generally employs morse code",
      "composed of unmodulated continuous wave (CW) signals",
      "all of the above"
    ],
    correct: 1
  },
  {
    q: "What is the approximate length of a Marconi antenna for 228 MHz?",
    a: ["1 meter", "0.33 meter", "2 meters", "0.5 meter"],
    correct: 0
  },
  {
    q: "What is the fundamental frequency of a signal if the 2nd harmonic is at 56 MHz?",
    a: ["28 MHz", "56 MHz", "112 MHz", "none of the above"],
    correct: 0
  },
  {
    q: "For satellite and space communications, the ideal wave polarization is __________",
    a: ["vertical", "horizontal", "circular", "none of the above"],
    correct: 2
  },
  {
    q: "When a double balanced mixer is injected with an RF carrier and an audio signal, it normally yields",
    a: [
      "double sideband with carrier",
      "double sideband with no carrier",
      "upper sideband with carrier",
      "lower sideband with carrier"
    ],
    correct: 0
  },
  {
    q: "Signal to noise ratio (SNR) is __________",
    a: [
      "ratio of amplitude of signal voltage over amplitude of noise voltage",
      "ratio of noise power over signal power",
      "the ratio of signal voltage over power voltage",
      "none of the above"
    ],
    correct: 1
  },
  {
    q: "While frequency drift is the unintended offset of an oscillator from the nominal frequency, what is the maximum instantaneous difference between the modulated frequency and the nominal carrier frequency?",
    a: ["frequency shift", "frequency deviation", "frequency change", "frequency variability"],
    correct: 1
  },
  {
    q: "In the emission designation, F3E, the number 3 denotes __________.",
    a: [
      "bandwidth of the modulating signal",
      "type of channel in this case one channel",
      "frequency modulation",
      "none of the above"
    ],
    correct: 0
  },
  {
    q: "Which transmission has the narrowest bandwidth?",
    a: ["A3E", "A3J", "F3E", "A1A"],
    correct: 3
  },
  {
    q: "From the choices listed, what emission type do Amateur Radio Operators in the 144MHz band commonly use to communicate locally with using voice communications or telephony?",
    a: ["QPSK", "FSK", "CW", "FM"],
    correct: 3
  },
  {
    q: "An electromagnetic field can be plotted graphically on the __________ axis.",
    a: [
      "X and Y axis of a graph",
      "X, Y, Z axis of a graph",
      "Y and Z axis of a graph",
      "none of the above"
    ],
    correct: 0
  },
  {
    q: "For a sinusoidal signal measuring 2 volts peak to peak, what is the root mean square value?",
    a: ["1 volt RMS", "3 volts RMS", "0.707 volt RMS", "none of the above"],
    correct: 2
  },
  {
    q: "The VCO, voltage controlled oscillator, is used often in VHF and UHF radios because injecting audio signals will __________.",
    a: ["frequency modulate it", "amplitude modulate it", "pulse modulate it", "all of the above"],
    correct: 0
  },
  {
    q: "What is the approximate length of a full-wave loop antenna for 21.005 MHz?",
    a: ["21 meters", "3.57 meters", "7.14 meters", "none of the above"],
    correct: 3
  },
  {
    q: "300,000,000 meters per second is the speed of light in __________.",
    a: ["air", "water", "vacuum", "none of the above"],
    correct: 2
  },
  {
    q: "How many symbols does the decimal numbering system have?",
    a: ["2", "10", "16", "32"],
    correct: 1
  },
  {
    q: "What is the frequency of a signal having a wavelength of 10.6 meters?",
    a: ["3.8 MHz", "28.3 MHz", "29.3 MHz", "21.295 MHz"],
    correct: 1
  },
  {
    q: "What emission type do Amateur Radio Operators in the HF band commonly use to communicate with each other using voice communications or telephony?",
    a: ["Continuous Wave", "Frequency Shift Keying", "Single Side Band", "RTTY"],
    correct: 2
  },
  {
    q: "The positive peak of a wave signal is also known as “__________”.",
    a: ["Floor", "Crest", "Trough", "Apex"],
    correct: 1
  },
  {
    q: "To improve harmonic suppression in a transmitter, this is employed at the amplifier’s output.",
    a: ["low pass filter", "crystal filter", "high pass filter", "reflective filter"],
    correct: 0
  },
  {
    q: "How many symbols does the hexadecimal system have?",
    a: ["2", "10", "16", "32"],
    correct: 2
  },
  {
    q: "To reduce key clicks, the best technique is to ___________.",
    a: [
      "introduce a slow rise of carrier power at the start of each transmitted wave",
      "prevent overdrive of the final amplifier",
      "ensure a good SWR at the antenna",
      "slow down the words per minute sent"
    ],
    correct: 0
  },
  {
    q: "What is the wavelength of the frequency 435 MHz?",
    a: ["7 meters", "0.7 meter", "21.1342 meters", "25.88 meters"],
    correct: 1
  },
  {
    q: "A sine wave with a peak voltage of 5 Volts has been measured. What is the RMS value of this wave?",
    a: ["5 Volts", "10 Volts", "2.5 Volts", "3.535 Volts"],
    correct: 3
  },
  {
    q: "What emission type do Amateur Radio Operators in the HF band commonly use to communicate with each other using telegraphy or Morse code?",
    a: ["Continuous Wave", "Frequency Shift Keying", "Single Side Band", "RTTY"],
    correct: 0
  },
  {
    q: "A dBi unit specification in antennas denotes the antenna gain reference to the __________.",
    a: ["Isotropic radiator", "Isopole radiator", "Marconi radiator", "Dipole radiator"],
    correct: 0
  },
  {
    q: "A sine wave with a peak-to-peak voltage of 20 Volts has been measured. What is the RMS value of this sine wave?",
    a: ["10 Volts", "7.07 Volts", "20 Volts", "5 Volts"],
    correct: 1
  },
  {
    q: "What is the frequency of a signal having a wavelength of 0.25 meters?",
    a: ["3.8 MHz", "28.3 MHz", "1.2 GHz", "25.88 meters"],
    correct: 2
  },
  {
    q: "What is the wavelength of the frequency 1800 kHz?",
    a: ["166.67 meters", "180 meters", "180 centimeters", "25.88 meters"],
    correct: 0
  },
  {
    q: "What is the wavelength of a signal whose central carrier is monitored at 14.195 MHz?",
    a: ["7 meters", "0.7 meter", "21.1342 meters", "25.88 meters"],
    correct: 2
  },
  {
    q: "The negative peak of the wave signal is also known as “__________”",
    a: ["Floor", "Crest", "Trough", "Apex"],
    correct: 2
  },
  {
    q: "Which is a VHF amateur band allocation?",
    a: ["70 cm", "23 cm", "6-meter band", "10-meter band"],
    correct: 2
  }
];
