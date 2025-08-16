import React, { useState } from "react";

export default function BMI() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;
    const heightInM = parseFloat(height) / 100;
    const bmiVal = parseFloat((weight / (heightInM * heightInM)).toFixed(1));
    setBMI(bmiVal);

    if (bmiVal < 18.5) setCategory("Underweight");
    else if (bmiVal >= 18.5 && bmiVal <= 24.9) setCategory("Normal Weight");
    else if (bmiVal >= 25 && bmiVal <= 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  const categoryColor = {
    "Underweight": "text-blue-400",
    "Normal Weight": "text-green-400",
    "Overweight": "text-yellow-400",
    "Obese": "text-red-500",
  };

  const getBMIColor = () => {
    if (!bmi) return "text-foreground";
    if (bmi < 18.5) return "text-blue-400";
    if (bmi < 25) return "text-green-400";
    if (bmi < 30) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="bg-black min-h-screen w-full overflow-hidden px-4 sm:px-10">
      <p className="flex justify-center">
        <span className="text-white text-xl sm:text-2xl bg-[#131c1c] border border-sky-500 rounded-2xl mt-10 py-3 px-4 hover:text-black hover:bg-sky-400">
          Check Your Health
        </span>
      </p>

      <h1 className="text-white text-3xl sm:text-5xl lg:text-5xl font-serif font-bold flex flex-col sm:flex-row justify-center mt-5 gap-2 sm:gap-5 text-center">
        CALCULATE
        <span className="text-sky-500 font-serif">BMI</span>
      </h1>

      <p className="text-gray-400 text-base sm:text-lg text-center mt-2">
        Get your Body Mass Index and personalized fitness recommendations to start your transformation journey.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8 items-center justify-center pb-10">
        {/* Left Side - Form */}
        <div className="text-white bg-[linear-gradient(145deg,_#000000,_#1a1a1a,_#33333333,_#000000)] rounded-xl p-6 w-full md:w-1/3 flex flex-col">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <img src="/calculator-solid-full.svg" alt="calc" className="w-6 h-6 sm:w-7 sm:h-7" />
            BMI Calculator
          </h2>

          <div className="mb-4">
            <p className="font-medium">Gender</p>
            <div className="flex gap-4 mt-2 flex-wrap">
              {['male', 'female', 'other'].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 hover:border-sky-400"
              placeholder="Enter your height"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 hover:border-sky-400"
              placeholder="Enter your weight"
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full text-black bg-sky-400 hover:bg-sky-900 hover:text-white transition p-2 rounded mt-4 font-semibold"
          >
            Calculate BMI
          </button>
        </div>

        {/* Right Side - Results */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 mt-6 md:mt-0">
          <div className="bg-[linear-gradient(145deg,_#000000,_#1a1a1a,_#33333333,_#000000)] rounded-xl p-6 text-center">
            <h3 className="text-lg flex justify-center items-center font-semibold text-white gap-2">
              <img src="/chart-line-solid-full.svg" alt="activity" className="w-6 h-6 sm:w-7 sm:h-7"/>
              Your BMI
            </h3>
            {bmi ? (
              <>
                <p className={`text-3xl sm:text-4xl font-serif font-bold mt-2 mb-1 ${getBMIColor()}`}>{bmi}</p>
                <p className={`font-serif font-semibold ${categoryColor[category]}`}>{category}</p>
              </>
            ) : (
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Enter your details to calculate BMI</p>
            )}
          </div>

          <div className="bg-[linear-gradient(145deg,_#000000,_#1a1a1a,_#33333333,_#000000)] rounded-xl p-6">
            <h4 className="font-bold mb-2 flex justify-center items-center gap-2">
              <img src="/heart-regular-full.svg" alt="Heart" className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="text-white">Weight Status Categories</span>
            </h4>
            <ul className="text-sm sm:text-base space-y-1 text-white">
              <li className="text-blue-400">Underweight <span className="text-white">- Below 18.5</span></li>
              <li className="text-green-400">Normal Weight <span className="text-white">- 18.5 - 24.9</span></li>
              <li className="text-yellow-400">Overweight <span className="text-white">- 25.0 - 29.9</span></li>
              <li className="text-red-500">Obese <span className="text-white">- 30.0 and above</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
