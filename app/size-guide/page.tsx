export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8 text-center">
          Size Guide
        </h1>

        <div className="space-y-8">
          <div className="bg-soft-accent p-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              How to Measure
            </h2>
            <p className="font-sans text-base font-light text-foreground/80 leading-relaxed mb-4">
              Measure yourself wearing your undergarments. Use a soft measuring
              tape and keep it parallel to the floor.
            </p>
            <ul className="font-sans text-sm font-light text-foreground/80 space-y-2 list-disc list-inside">
              <li>
                <strong>Bust:</strong> Measure around the fullest part of your
                bust
              </li>
              <li>
                <strong>Waist:</strong> Measure around the narrowest part of
                your waist
              </li>
              <li>
                <strong>Hip:</strong> Measure around the fullest part of your
                hips
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-soft-accent">
                <tr>
                  <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                    Size
                  </th>
                  <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                    Bust (cm)
                  </th>
                  <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                    Waist (cm)
                  </th>
                  <th className="px-6 py-4 text-left font-serif text-sm font-semibold text-foreground">
                    Hip (cm)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                <tr>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    S
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    86-90
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    66-70
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    90-94
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    M
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    90-94
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    70-74
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    94-98
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    L
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    94-98
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    74-78
                  </td>
                  <td className="px-6 py-4 font-sans text-sm font-light text-foreground">
                    98-102
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

