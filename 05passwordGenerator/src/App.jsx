import { useCallback, useState, useRef, useEffect } from "react";

function App() {

  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~`";
    
    for (let i = 0; i < length; i++) {
      const num = Math.floor(Math.random() * str.length);
      pass += str[num];
    }
    setPassword(pass);
    setCopied(false);
  }, [length, numAllowed, charAllowed]);
  
  useEffect(() => {  
    generatePassword();
  }, [length, numAllowed, charAllowed])

  const copyPassword = useCallback(() => {
    if (!password) return;
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-black to-gray-900 text-white px-6 relative overflow-hidden">

      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse delay-300"></div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.15)] p-8 space-y-8 transform transition-all duration-700 hover:shadow-cyan-500/40 hover:scale-[1.02]">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_25px_rgba(0,255,255,0.3)] animate-fadeIn">
            Password Generator
          </h1>
          <p className="text-gray-400 text-sm italic">Secure. Elegant. Effortless.</p>
        </div>

        {/* Password Display */}
        <div className="relative group">
          <input
            ref={passwordRef}
            value={password}
            readOnly
            placeholder="Generate your next-level password..."
            className="w-full px-4 py-4 pr-20 bg-gray-900/60 border border-gray-700 rounded-xl text-lg text-white placeholder-gray-500 focus:outline-none shadow-inner focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          {/* Copy Button */}
          <button
            onClick={copyPassword}
            className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg font-semibold text-sm tracking-wide backdrop-blur-md border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 
              ${copied 
                ? "bg-green-500/80 text-white scale-105 shadow-[0_0_20px_rgba(34,197,94,0.6)]" 
                : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>


        {/* Controls */}
        <div className="space-y-5">
          {/* Length */}
          <div className="flex items-center justify-between">
            <label className="text-gray-300 font-medium">
              Length: <span className="text-cyan-400">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-2/3 accent-cyan-500 cursor-pointer transition-all hover:accent-cyan-400"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center">
            <label className="text-gray-300 font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              className="w-6 h-6 accent-cyan-500 cursor-pointer hover:scale-110 transition-all"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-gray-300 font-medium">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-6 h-6 accent-cyan-500 cursor-pointer hover:scale-110 transition-all"
            />
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 py-3 rounded-xl font-semibold text-lg shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-500 hover:scale-[1.03] active:scale-95"
        >
          Generate Password
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm pt-2">
          Crafted with 💙 by{" "}
          <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
            Alex McDominey
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
