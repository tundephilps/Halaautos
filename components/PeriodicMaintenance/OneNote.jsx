import React from "react";

const OneNote = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* General Notes Section */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Notes for all the vehicles except SUPRA and URBAN CRUISER:
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="p-4 bg-gray-50 w-1/3 font-medium">
                  Fuel Filter
                </td>
                <td className="p-4">
                  <div>Out Tank every 40000 km</div>
                  <div>In Tank every 80000 km</div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 bg-gray-50 w-1/3 font-medium">
                  SLLC (Coolant)
                </td>
                <td className="p-4">
                  <div>First time after 160,000 km</div>
                  <div>After that every 80,000 km</div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 w-1/3 font-medium">
                  Spark Plugs
                </td>
                <td className="p-4">
                  <div>Normal type every 20,000 km</div>
                  <div>Iridium type every 100,000 km</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Supra Notes Section */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Notes for SUPRA:
        </h2>
        <ul className="border rounded-lg p-4 space-y-3">
          <li>
            <span className="text-red-600">•</span> Replace both the engine oil
            and oil filter when the engine oil warning light appears, even if 12
            months have not passed or when driven less than 12,000 km since the
            last oil change.
          </li>
          <li>
            <span className="text-red-600">•</span> For Brake pads: Replace when
            the brake warning light appears.
          </li>
          <li>
            <span className="text-red-600">•</span> For Brake fluid: First
            replace at 36 months, then replace every 24 months.
          </li>
        </ul>
      </section>

      {/* Urban Cruiser Notes Section */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Notes for Urban Cruiser:
        </h2>
        <ul className="border rounded-lg p-4 space-y-3">
          <li>
            <span className="text-red-600">•</span> Engine coolant: First
            replace at 160,000 km (96 M), then replace every 80,000 km (48 M).
          </li>
          <li>
            <span className="text-red-600">•</span> Spark plugs (Iridium):
            Replace every 105,000 km.
          </li>
          <li>
            <span className="text-red-600">•</span> Fuel filter: Replace every
            105,000 km.
          </li>
          <li>
            <span className="text-red-600">•</span> Parking brake lever and
            cable: Check, Adjustment (1st 15,000 km only)
          </li>
          <li>
            <span className="text-red-600">•</span> Automatic transmission
            fluid: Replace every 165,000 km.
          </li>
        </ul>
      </section>

      {/* Important Note Section */}
      <section>
        <h2 className="text-lg font-bold text-red-600 mb-2">Important Note</h2>
        <p className="text-sm text-gray-600 border rounded-lg p-4">
          Periodic maintenance schedule below is to illustrate the common points
          in a required maintenance. Please refer to your owners Manual/
          Warranty booklet for specific / exact periodic maintenance
          information.
        </p>
      </section>
    </div>
  );
};

export default OneNote;
