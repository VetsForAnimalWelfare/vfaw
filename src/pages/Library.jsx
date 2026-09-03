import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Library.css";

const blogs = [
  {
  id: "milk-fever-in-dairy-cows",
  category: "Veterinary Medicine",
  title: "Milk Fever in Dairy Cows",
  excerpt:
    "A comprehensive guide to parturient paresis and periparturient hypocalcaemia, including calcium homeostasis, risk factors, DCAD, prevention, and transition cow management.",
  author: "VFAW",
  date: "September 3, 2026",
  readTime: "15 min read",
  image:
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=80",

  content: (
    <>
      <p className="lead">
        <strong>Milk fever</strong>, also known as{" "}
        <strong>parturient paresis</strong> or{" "}
        <strong>periparturient hypocalcaemia</strong>, is an important
        metabolic disease of dairy cows occurring mainly around calving. It
        develops when blood calcium concentration falls rapidly as the cow
        begins producing milk.
      </p>

      <p>
        At the onset of lactation, large quantities of calcium are suddenly
        transferred from the blood into milk. If calcium absorption from the
        intestine and calcium mobilization from bone cannot increase rapidly
        enough, blood calcium concentration falls and hypocalcaemia develops.
      </p>

      <h2>Blood Calcium Levels</h2>

      <div className="article-table-wrapper">
        <table className="article-table">
          <thead>
            <tr>
              <th>Condition</th>
              <th>Total Blood Calcium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal</td>
              <td>2.0–2.5 mmol/L</td>
            </tr>
            <tr>
              <td>Subclinical hypocalcaemia</td>
              <td>1.4–2.0 mmol/L</td>
            </tr>
            <tr>
              <td>Clinical hypocalcaemia (Milk fever)</td>
              <td>&lt;1.4 mmol/L</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>1. The Transition Period and Homeorhesis</h2>

      <p>
        The transition period extends approximately from <strong>four weeks
        before calving to four weeks after calving</strong>.
      </p>

      <div className="article-flow">
        Pregnancy → Calving → Lactation
      </div>

      <p>
        During this period, the cow undergoes major metabolic, hormonal, and
        physiological adaptation. The coordinated physiological changes that
        redirect metabolism toward a new physiological state are known as
        <strong> homeorhesis</strong>.
      </p>

      <h3>Homeostasis and Homeorhesis</h3>

      <p>
        <strong>Homeostasis</strong> refers to maintaining a relatively stable
        internal environment.
      </p>

      <p>
        <strong>Homeorhesis</strong> refers to coordinated physiological and
        metabolic changes that redirect the body's metabolism to support a new
        physiological state.
      </p>

      <div className="article-highlight">
        Dry Cow → Lactating Cow
      </div>

      <p>During this transition, the cow must rapidly adapt:</p>

      <ul>
        <li>Calcium metabolism</li>
        <li>Energy metabolism</li>
        <li>Mineral metabolism</li>
        <li>Hormonal regulation</li>
        <li>Overall metabolic activity</li>
      </ul>

      <p>
        Failure of these adaptations can contribute to metabolic diseases such
        as milk fever.
      </p>

      <h2>2. Importance of Milk Fever</h2>

      <p>
        Hypocalcaemia is important not only because it causes clinical milk
        fever. Even <strong>subclinical hypocalcaemia</strong>, where obvious
        clinical signs may not be present, can significantly affect health and
        productivity.
      </p>

      <div className="article-flow">
        Hypocalcaemia
        <br />↓
        <br />
        Reduced muscle contraction + Altered metabolism
        <br />↓
        <br />
        Increased disease and production problems
      </div>

      <p>Low calcium can increase the risk of:</p>

      <ul>
        <li>Mastitis</li>
        <li>Ketosis</li>
        <li>Retained placenta</li>
        <li>Displaced abomasum</li>
        <li>Uterine prolapse</li>
        <li>Poor fertility and reproductive disorders</li>
        <li>Increased culling</li>
        <li>Downer cow syndrome</li>
      </ul>

      <h2>3. Calcium and Muscle Contraction</h2>

      <p>
        Calcium is essential for normal muscle contraction. The basic process
        is:
      </p>

      <div className="article-flow">
        Nerve impulse
        <br />↓
        <br />
        Ca²⁺ release
        <br />↓
        <br />
        Ca²⁺ binds to Troponin C
        <br />↓
        <br />
        Tropomyosin moves
        <br />↓
        <br />
        Actin binding sites become exposed
        <br />↓
        <br />
        Myosin binds to actin
        <br />↓
        <br />
        Muscle contraction
      </div>

      <p>
        Therefore, when blood calcium becomes very low, contraction of
        skeletal, smooth, and cardiac muscle may be impaired.
      </p>

      <h2>4. Incidence of Milk Fever</h2>

      <div className="article-table-wrapper">
        <table className="article-table">
          <thead>
            <tr>
              <th>Region</th>
              <th>Approximate Incidence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>North America</td>
              <td>3.45%</td>
            </tr>
            <tr>
              <td>Europe</td>
              <td>6.17%</td>
            </tr>
            <tr>
              <td>Australasia</td>
              <td>3.5%</td>
            </tr>
            <tr>
              <td>Nepal</td>
              <td>5–10%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Field incidence generally ranges from approximately 0–10%, although
        substantial variation occurs between herds and production systems.
      </p>

      <ul>
        <li>Some herds may have an incidence below 1%</li>
        <li>Some herds may experience more than 25%</li>
        <li>Research trials have reported much higher incidences</li>
      </ul>

      <p>
        This variation demonstrates the importance of nutrition, mineral
        balance, feeding management, and transition cow management.
      </p>

      <h2>5. Cows at Greater Risk of Milk Fever</h2>

      <h3>5.1 Older Cows</h3>

      <p>
        Risk increases with increasing lactation number. Older cows may have a
        reduced ability to rapidly mobilize calcium from bone and respond to
        vitamin D.
      </p>

      <h3>5.2 High-Producing Cows</h3>

      <p>
        High-producing cows lose greater quantities of calcium through milk.
        Their calcium requirement therefore increases substantially at the
        onset of lactation.
      </p>

      <h3>5.3 Breed</h3>

      <p>
        Jersey and other Channel Island breeds are generally more susceptible
        to milk fever than Holstein cows.
      </p>

      <h3>5.4 Over-Conditioned Cows</h3>

      <p>
        Cows with a body condition score greater than <strong>3.5/5</strong>
        may have an increased risk of milk fever and other transition-period
        metabolic disorders.
      </p>

      <h3>5.5 High Dietary Potassium Before Calving</h3>

      <div className="article-flow">
        High K⁺ intake
        <br />↓
        <br />
        Metabolic alkalosis
        <br />↓
        <br />
        Reduced effectiveness of PTH
        <br />↓
        <br />
        Reduced calcium mobilization
        <br />↓
        <br />
        Increased milk fever risk
      </div>

      <h3>5.6 High Dietary Phosphorus Before Calving</h3>

      <p>
        High phosphorus intake before calving may interfere with normal calcium
        regulation, including the calcium, PTH, and vitamin D systems.
      </p>

      <h2>6. What Happens to Calcium at Calving?</h2>

      <h3>Before Calving</h3>

      <p>
        The approximate calcium requirement may be around{" "}
        <strong>30 g/day</strong>.
      </p>

      <ul>
        <li>Approximately 15 g for faecal and urinary losses</li>
        <li>Approximately 15 g for fetal growth</li>
      </ul>

      <h3>Immediately After Calving</h3>

      <p>
        At the onset of milk production, calcium demand increases dramatically.
        Milk production may remove <strong>more than 50 g of calcium per
        day</strong>.
      </p>

      <div className="article-flow">
        Calcium requirement suddenly increases
        <br />↓
        <br />
        Absorption and mobilization cannot increase rapidly enough
        <br />↓
        <br />
        Blood calcium decreases
        <br />↓
        <br />
        Hypocalcaemia
        <br />↓
        <br />
        Milk fever
      </div>

      <h2>7. Sources of Calcium in the Cow</h2>

      <h3>7.1 Intestinal Absorption</h3>

      <p>Dietary calcium is absorbed from the gastrointestinal tract.</p>

      <h3>7.2 Bone Mobilization</h3>

      <p>
        Approximately <strong>99% of body calcium is stored in bone</strong>.
        Bone therefore acts as the major calcium reserve.
      </p>

      <h3>7.3 Renal Conservation</h3>

      <p>
        The kidneys conserve calcium by increasing calcium reabsorption when
        necessary.
      </p>

      <div className="article-highlight">
        Dietary absorption + Bone mobilization + Renal conservation
      </div>

      <h2>8. Calcium Homeostasis</h2>

      <p>Three major hormonal regulators are involved:</p>

      <ol>
        <li>Parathyroid hormone (PTH)</li>
        <li>1,25-dihydroxyvitamin D₃ [1,25(OH)₂D₃]</li>
        <li>Calcitonin</li>
      </ol>

      <h3>Response to Low Blood Calcium</h3>

      <div className="article-flow">
        Milk production begins
        <br />↓
        <br />
        Calcium enters milk
        <br />↓
        <br />
        Blood calcium decreases
        <br />↓
        <br />
        PTH secretion increases
      </div>

      <p>PTH then:</p>

      <ul>
        <li>Increases calcium mobilization from bone</li>
        <li>Increases renal calcium reabsorption</li>
        <li>Stimulates production of active vitamin D</li>
      </ul>

      <div className="article-flow">
        1,25(OH)₂D₃ increases
        <br />↓
        <br />
        Intestinal calcium absorption increases
        <br />↓
        <br />
        Bone calcium mobilization increases
        <br />↓
        <br />
        Blood calcium is restored
      </div>

      <h2>9. Role of Calcitonin</h2>

      <p>
        Calcitonin acts primarily when blood calcium concentration is high and
        helps oppose an excessive increase in blood calcium.
      </p>

      <div className="article-highlight">
        PTH raises blood calcium + Vitamin D raises blood calcium + Calcitonin
        prevents excessive elevation
      </div>

      <h2>10. Vitamin D Metabolism</h2>

      <div className="article-flow">
        7-dehydrocholesterol in skin
        <br />↓
        <br />
        Vitamin D₃
        <br />↓
        <br />
        Liver
        <br />↓
        <br />
        25-hydroxyvitamin D₃
        <br />↓
        <br />
        Kidney
        <br />↓
        <br />
        1,25-dihydroxyvitamin D₃
      </div>

      <p>
        The final product, <strong>1,25(OH)₂D₃</strong>, is the active form of
        vitamin D.
      </p>

      <h2>11. Why Does Milk Fever Occur?</h2>

      <blockquote>
        The fundamental problem in milk fever is that sudden calcium demand
        exceeds the ability of the cow to supply calcium.
      </blockquote>

      <div className="article-flow">
        Calving
        <br />↓
        <br />
        Sudden onset of milk production
        <br />↓
        <br />
        Large amounts of calcium enter milk
        <br />↓
        <br />
        Blood calcium decreases
        <br />↓
        <br />
        PTH and vitamin D mechanisms activate
        <br />↓
        <br />
        Response is not rapid enough
        <br />↓
        <br />
        Milk fever
      </div>

      <h2>12. Why Can't the Cow Simply Mobilize More Calcium?</h2>

      <h3>Intestinal Limitation</h3>

      <p>
        The intestine cannot immediately increase calcium absorption enough to
        meet the sudden calcium requirement.
      </p>

      <h3>Bone Mobilization Limitation</h3>

      <p>
        Bone calcium mobilization also requires hormonal activation and time.
        This is particularly important in older cows and poorly adapted cows.
      </p>

      <h2>13. High-Calcium and Low-Calcium Pre-Calving Diets</h2>

      <h3>High Calcium Before Calving</h3>

      <p>
        Excessive calcium intake before calving may reduce the readiness of the
        calcium homeostatic system by decreasing the need for calcium
        absorption and bone mobilization.
      </p>

      <h3>Low Calcium Before Calving</h3>

      <div className="article-flow">
        Low dietary calcium
        <br />↓
        <br />
        PTH activity increases
        <br />↓
        <br />
        Vitamin D activation increases
        <br />↓
        <br />
        Bone mobilization and intestinal absorption become more active
        <br />↓
        <br />
        Better preparation for lactation
      </div>

      <h2>14. Role of Magnesium</h2>

      <p>Magnesium is important for:</p>

      <ul>
        <li>Proper PTH secretion</li>
        <li>Normal synthesis of 1,25(OH)₂D₃</li>
        <li>Normal bone response to PTH</li>
        <li>Normal kidney response to PTH</li>
      </ul>

      <div className="article-flow">
        Hypomagnesaemia
        <br />↓
        <br />
        Impaired PTH secretion and action
        <br />↓
        <br />
        Reduced calcium mobilization
        <br />↓
        <br />
        Increased hypocalcaemia risk
      </div>

      <h2>15. Role of Phosphorus</h2>

      <p>
        High phosphorus intake before calving can negatively influence calcium
        regulation and increase milk fever risk. Excessive phosphorus should
        therefore be avoided in transition diets.
      </p>

      <h2>16. Dietary Cation-Anion Difference (DCAD)</h2>

      <p>
        DCAD represents the balance between important positively and negatively
        charged ions in the diet.
      </p>

      <div className="article-highlight">
        DCAD = (Na⁺ + K⁺) − (Cl⁻ + S-related anions)
      </div>

      <h3>High DCAD</h3>

      <div className="article-flow">
        High K⁺ intake
        <br />↓
        <br />
        DCAD increases
        <br />↓
        <br />
        More alkaline metabolic state
        <br />↓
        <br />
        Reduced effectiveness of calcium homeostasis
        <br />↓
        <br />
        Increased milk fever risk
      </div>

      <h3>Low DCAD</h3>

      <div className="article-flow">
        More dietary anions
        <br />↓
        <br />
        Mild metabolic acidosis
        <br />↓
        <br />
        Calcium homeostatic mechanisms become more active
        <br />↓
        <br />
        Improved calcium availability
        <br />↓
        <br />
        Reduced milk fever risk
      </div>

      <h2>17. How Do Anionic Salts Work?</h2>

      <p>Examples include:</p>

      <ul>
        <li>Calcium chloride</li>
        <li>Calcium sulfate</li>
        <li>Magnesium chloride</li>
        <li>Ammonium chloride</li>
        <li>Ammonium sulfate</li>
      </ul>

      <div className="article-flow">
        Anion intake increases
        <br />↓
        <br />
        Mild metabolic acidosis
        <br />↓
        <br />
        Calcium metabolism becomes more active
      </div>

      <h2>18. Urinary pH and DCAD</h2>

      <p>
        Urinary pH can help monitor the effect of anionic diets. However, the
        main objective of DCAD management is not simply to lower urinary pH.
      </p>

      <blockquote>
        The primary objective of reducing DCAD is to reduce the risk of milk
        fever.
      </blockquote>

      <h2>19. Why Is High Potassium Dangerous?</h2>

      <p>
        High potassium is particularly important in pasture-based dairy systems
        because forage may contain high concentrations of potassium.
      </p>

      <div className="article-flow">
        Potassium intake increases
        <br />↓
        <br />
        DCAD increases
        <br />↓
        <br />
        More alkaline metabolic state
        <br />↓
        <br />
        Milk fever risk increases
      </div>

      <h2>20. Duration of the Pre-Calving Diet</h2>

      <p>
        The duration of exposure to a transition diet may influence milk fever
        risk. However, duration cannot be considered independently from the
        composition and suitability of the complete diet.
      </p>

      <p>
        A properly designed transition diet may improve overall health,
        production, reproduction, and herd retention.
      </p>

      <h2>21. Overall Mineral Recommendations</h2>

      <div className="article-table-wrapper">
        <table className="article-table">
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Approximate Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calcium (Ca)</td>
              <td>50–70 g/day</td>
            </tr>
            <tr>
              <td>Magnesium (Mg)</td>
              <td>40–50 g/day</td>
            </tr>
            <tr>
              <td>Phosphorus (P)</td>
              <td>&lt;35 g/day</td>
            </tr>
            <tr>
              <td>DCAD</td>
              <td>+15 to −15 mEq/100 g DM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        These are broad recommendations and should not be treated as a
        universal ration formulation. Individual herd conditions, forage
        composition, mineral interactions, and professional nutritional advice
        should be considered.
      </p>

      <h2>22. Relationship Between the Major Minerals</h2>

      <div className="article-highlight">
        <strong>Calcium:</strong> Directly involved in milk fever
        <br />
        <br />
        <strong>Magnesium:</strong> Supports PTH and vitamin D function
        <br />
        <br />
        <strong>High Phosphorus:</strong> Can increase milk fever risk
        <br />
        <br />
        <strong>High Potassium:</strong> Increases DCAD and milk fever risk
        <br />
        <br />
        <strong>Chloride and Sulfur:</strong> Lower DCAD and support calcium
        adaptation
      </div>

      <h2>23. Main Prevention Strategy</h2>

      <p>
        Milk fever prevention is primarily about preparing the cow before
        calving.
      </p>

      <ul>
        <li>Balanced calcium intake</li>
        <li>Adequate magnesium intake</li>
        <li>Avoidance of excessive phosphorus</li>
        <li>Control of potassium intake</li>
        <li>Appropriate DCAD management</li>
      </ul>

      <div className="article-flow">
        Balanced Ca + Adequate Mg + Controlled P + Controlled K + Appropriate
        DCAD
        <br />↓
        <br />
        Improved calcium homeostatic adaptation
        <br />↓
        <br />
        Increased calcium mobilization and absorption
        <br />↓
        <br />
        Better preparation for lactation
        <br />↓
        <br />
        Reduced milk fever risk
      </div>

      <h2>24. Vitamin D as a Preventive Strategy</h2>

      <p>
        Vitamin D metabolites have been investigated for prevention of milk
        fever because they can increase intestinal calcium absorption and
        support calcium mobilization.
      </p>

      <p>Examples include:</p>

      <ul>
        <li>1α-hydroxycholecalciferol</li>
        <li>1,25(OH)₂D₃</li>
      </ul>

      <p>
        However, timing is important and excessive administration can cause
        persistent hypercalcaemia and tissue calcification. Therefore, dietary
        and mineral management remain central preventive strategies.
      </p>

      <h2>Conclusion</h2>

      <p>
        Milk fever, also known as parturient paresis or periparturient
        hypocalcaemia, occurs when the sudden calcium requirement at the onset
        of lactation exceeds the cow's ability to rapidly maintain normal blood
        calcium concentration.
      </p>

      <div className="article-flow">
        Calving
        <br />↓
        <br />
        Sudden calcium loss into milk
        <br />↓
        <br />
        Blood calcium decreases
        <br />↓
        <br />
        Calcium homeostatic response is insufficient or too slow
        <br />↓
        <br />
        Hypocalcaemia and milk fever
      </div>

      <p>
        Effective prevention focuses on preparing calcium homeostatic mechanisms
        before calving through appropriate transition cow management, balanced
        mineral nutrition, adequate magnesium, controlled phosphorus and
        potassium, and appropriate DCAD management.
      </p>

      <p className="final-statement">
        <strong>Key concept to remember:</strong>
        <br />
        Milk fever is not simply a deficiency of calcium in the diet. It is
        primarily a failure of the cow to adapt rapidly enough to the sudden
        calcium demand created by the onset of lactation.
      </p>
    </>
  ),
},
  {
    id: "humane-animal-welfare",
    category: "Animal Welfare",
    title: "The Importance of Humane Animal Welfare",
    excerpt:
      "Understanding why compassionate, ethical, and responsible animal welfare practices matter for animals and communities.",
    author: "VFAW",
    date: "September 2, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1600&q=80",

    content: (
      <>
        <p className="lead">
          Animal welfare is an essential part of building a compassionate,
          responsible, and sustainable society. Animals are sentient beings
          capable of experiencing pain, fear, stress, comfort, and positive
          states of well-being.
        </p>

        <p>
          Humane animal welfare means ensuring that animals receive appropriate
          care, protection, and respect throughout their lives. Animal welfare
          extends beyond simply preventing cruelty. It involves providing
          adequate nutrition, clean water, suitable shelter, appropriate
          healthcare, protection from unnecessary suffering, and opportunities
          to express normal behaviours.
        </p>

        <h2>What Is Animal Welfare?</h2>

        <p>
          Animal welfare refers to the physical and mental well-being of an
          animal in relation to the conditions in which it lives and dies. Good
          welfare means that an animal is healthy, comfortable, safe, and able
          to experience positive states while being protected from unnecessary
          pain, fear, and distress.
        </p>

        <p>
          Humane animal welfare applies to companion animals, livestock,
          working animals, wildlife, and animals under human care. The
          responsibilities may differ between species, but the fundamental
          principle remains the same: animals should be treated with care,
          respect, and consideration for their biological and behavioural
          needs.
        </p>

        <blockquote>
          Animal welfare is not only about preventing suffering; it is also
          about creating conditions in which animals can live healthy and
          fulfilling lives.
        </blockquote>

        <h2>The Five Freedoms</h2>

        <p>
          The Five Freedoms provide a widely recognized framework for
          understanding animal welfare.
        </p>

        <ul>
          <li>
            <strong>Freedom from hunger and thirst:</strong> Access to fresh
            water and an appropriate diet.
          </li>

          <li>
            <strong>Freedom from discomfort:</strong> Suitable shelter and
            comfortable living conditions.
          </li>

          <li>
            <strong>Freedom from pain, injury, and disease:</strong> Prevention,
            rapid diagnosis, and appropriate treatment.
          </li>

          <li>
            <strong>Freedom to express normal behaviour:</strong> Adequate
            space and opportunities for natural behaviours.
          </li>

          <li>
            <strong>Freedom from fear and distress:</strong> Conditions that
            minimize unnecessary psychological suffering.
          </li>
        </ul>

        <h2>Why Does Animal Welfare Matter?</h2>

        <h3>1. Ethical Responsibility</h3>

        <p>
          Humans have a significant responsibility toward animals because many
          animals depend directly on people for food, shelter, healthcare,
          protection, and survival.
        </p>

        <p>
          Treating animals humanely reflects compassion, responsibility, and
          respect for living beings. Preventing unnecessary pain, neglect,
          abandonment, and cruelty is a fundamental component of responsible
          animal care.
        </p>

        <h3>2. Better Animal Health</h3>

        <p>
          Animal welfare and animal health are closely connected. Proper
          nutrition, clean water, suitable housing, disease prevention,
          veterinary care, and appropriate handling can significantly improve
          an animal's health and quality of life.
        </p>

        <h3>3. Public Health and Community Well-Being</h3>

        <p>
          Animal welfare is also connected with human health. Responsible animal
          management, vaccination, appropriate sanitation, and timely veterinary
          care contribute to healthier communities.
        </p>

        <h3>4. Responsible Livestock Production</h3>

        <p>
          Providing livestock with adequate nutrition, comfortable housing,
          disease prevention, humane transportation, and proper veterinary care
          supports both animal well-being and sustainable production.
        </p>

        <h2>The Role of Veterinary Professionals</h2>

        <p>
          Veterinary professionals have a central role in protecting and
          promoting animal welfare. Their responsibilities extend beyond
          diagnosing and treating diseases.
        </p>

        <p>
          Veterinarians contribute to preventive healthcare, pain management,
          humane handling, nutrition, responsible breeding, disease control, and
          ethical decision-making.
        </p>

        <h2>Community Participation</h2>

        <p>
          Animal welfare cannot be achieved by veterinarians and animal welfare
          organizations alone. Communities play an equally important role in
          creating lasting change.
        </p>

        <ul>
          <li>Promoting responsible animal ownership</li>
          <li>Supporting humane population management</li>
          <li>Providing appropriate veterinary care</li>
          <li>Encouraging responsible adoption</li>
          <li>Providing proper nutrition and shelter</li>
          <li>Reporting cases of cruelty and neglect</li>
          <li>Creating awareness about responsible animal care</li>
        </ul>

        <h2>Building a Humane Future</h2>

        <p>
          Improving animal welfare requires cooperation between individuals,
          veterinary professionals, farmers, communities, organizations, and
          governments.
        </p>

        <p className="final-statement">
          Ultimately, promoting humane animal welfare is not only an act of
          kindness—it is a shared responsibility toward a healthier, more
          compassionate, and sustainable society.
        </p>
      </>
    ),
  },

  {
    id: "animal-population-management",
    category: "Animal Welfare",
    title: "Humane Animal Population Management",
    excerpt:
      "Exploring responsible and humane approaches to managing stray and companion animal populations.",
    author: "VFAW",
    date: "August 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",

    content: (
      <>
        <p className="lead">
          Managing animal populations is an important component of animal
          welfare, public health, and responsible community development.
        </p>

        <p>
          Effective population management should focus on humane, sustainable,
          and evidence-based approaches rather than temporary or harmful
          solutions.
        </p>

        <h2>Understanding the Problem</h2>

        <p>
          Uncontrolled reproduction can contribute to increasing populations of
          stray and free-roaming animals. This can create challenges for
          animals, communities, animal welfare organizations, and local
          authorities.
        </p>

        <h2>Humane Solutions</h2>

        <p>
          Humane population management can include sterilization, vaccination,
          responsible ownership, adoption, identification, disease prevention,
          and public education.
        </p>

        <blockquote>
          Humane population management should prioritize animal welfare while
          addressing legitimate community concerns.
        </blockquote>

        <h2>Community Participation</h2>

        <p>
          Long-term success depends on community participation. Educating animal
          owners and encouraging responsible care can help prevent unwanted
          reproduction and reduce abandonment.
        </p>

        <h2>Conclusion</h2>

        <p className="final-statement">
          Sustainable animal population management requires cooperation among
          veterinary professionals, communities, organizations, animal owners,
          and local authorities.
        </p>
      </>
    ),
  },

  {
    id: "veterinary-students-animal-welfare",
    category: "Veterinary Education",
    title: "The Role of Veterinary Students in Animal Welfare",
    excerpt:
      "How veterinary students can contribute to better animal care, public awareness, and welfare initiatives.",
    author: "VFAW",
    date: "August 20, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=80",

    content: (
      <>
        <p className="lead">
          Veterinary students are future professionals who can play an important
          role in improving animal welfare.
        </p>

        <p>
          Their education provides knowledge of animal health, behaviour,
          disease prevention, nutrition, and responsible animal care.
        </p>

        <h2>Education and Awareness</h2>

        <p>
          Veterinary students can help communities understand responsible
          ownership, vaccination, nutrition, disease prevention, and humane
          treatment.
        </p>

        <h2>Practical Experience</h2>

        <p>
          Participation in animal welfare programs provides students with
          practical experience while allowing them to contribute meaningfully to
          their communities.
        </p>

        <h2>Building a Better Future</h2>

        <p>
          Through education, volunteering, research, and community engagement,
          veterinary students can become strong advocates for animal welfare.
        </p>

        <p className="final-statement">
          The knowledge and compassion developed during veterinary education can
          create a lasting positive impact on animals and communities.
        </p>
      </>
    ),
  },
];

const Library = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);

  const selectedBlog = blogs.find((blog) => blog.id === blogId);

  // Reading progress
  useEffect(() => {
    if (!selectedBlog) return;

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(
        Math.min(100, Math.max(0, scrollProgress))
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedBlog]);

  // =====================================
  // FULL ARTICLE READING MODE
  // =====================================

  if (selectedBlog) {
    return (
      <div
        className={`reading-mode ${
          darkMode ? "reading-dark" : "reading-light"
        }`}
      >
        {/* Reading Progress */}
        <div className="reading-progress-container">
          <div
            className="reading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Reading Header */}
        <header className="reading-header">
          <div className="reading-header-content">
            <button
              className="back-library-btn"
              onClick={() => navigate("/library")}
            >
              <span>←</span>

              <span className="back-text">
                Back to Library
              </span>
            </button>

            <span className="reading-progress-text">
              {Math.round(progress)}% read
            </span>

            <button
              className="theme-btn"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              {darkMode
                ? "☀ Light"
                : "☾ Dark"}
            </button>
          </div>
        </header>

        {/* Article */}
        <main className="reading-main">
          <article className="reading-article">

            {/* Category */}
            <div className="article-category">
              {selectedBlog.category}
            </div>

            {/* Title */}
            <h1 className="article-title">
              {selectedBlog.title}
            </h1>

            {/* Metadata */}
            <div className="article-meta">
              <span className="article-author">
                {selectedBlog.author}
              </span>

              <span>•</span>

              <span>
                {selectedBlog.date}
              </span>

              <span>•</span>

              <span>
                {selectedBlog.readTime}
              </span>
            </div>

            {/* Hero Image */}
            <div className="article-image-wrapper">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="article-image"
              />
            </div>

            {/* Article Paper */}
            <div className="article-paper">
              <div className="article-content">
                {selectedBlog.content}
              </div>
            </div>

            {/* End Article */}
            <div className="article-ending">
              <div className="ending-symbol">
                ✦
              </div>

              <h3>
                End of Article
              </h3>

              <p>
                Thank you for reading.
              </p>

              <button
                className="explore-btn"
                onClick={() =>
                  navigate("/library")
                }
              >
                ← Explore More Articles
              </button>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // =====================================
  // SEARCH FILTER
  // =====================================

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      blog.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      blog.excerpt
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // =====================================
  // LIBRARY HOME PAGE
  // =====================================

  return (
    <div className="library-page">

      {/* Hero */}
      <section className="library-hero">
        <span className="library-badge">
          VFAW LIBRARY
        </span>

        <h1>
          Knowledge &
          <span>
            Resources
          </span>
        </h1>

        <p>
          Explore articles, insights,
          educational resources, and stories
          related to veterinary science and
          animal welfare.
        </p>

        {/* Search */}
        <div className="library-search">
          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              className="clear-search"
              onClick={() =>
                setSearch("")
              }
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </section>

      {/* Articles */}
      <section className="library-section">

        <div className="library-section-header">
          <div>
            <span className="section-label">
              LATEST ARTICLES
            </span>

            <h2>
              Blogs
            </h2>
          </div>

          <span className="article-count">
            {filteredBlogs.length} Articles
          </span>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">

            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/library/blog/${blog.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <article className="blog-card">

                  {/* Image */}
                  <div className="blog-image-wrapper">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />

                    <div className="blog-image-overlay" />

                    <span className="blog-category">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="blog-card-content">

                    <div className="blog-card-meta">
                      <span>
                        {blog.date}
                      </span>

                      <span>•</span>

                      <span>
                        {blog.readTime}
                      </span>
                    </div>

                    <h3>
                      {blog.title}
                    </h3>

                    <p>
                      {blog.excerpt}
                    </p>

                    <div className="read-article-btn">
                      <span>
                        Read Article
                      </span>

                      <span className="read-arrow">
                        →
                      </span>
                    </div>
                  </div>

                </article>
              </Link>
            ))}

          </div>
        ) : (
          /* No Results */
          <div className="no-results">

            <div className="no-results-icon">
              📚
            </div>

            <h3>
              No articles found
            </h3>

            <p>
              Try searching for another topic.
            </p>

            <button
              className="reset-search-btn"
              onClick={() =>
                setSearch("")
              }
            >
              Show All Articles
            </button>

          </div>
        )}

      </section>
    </div>
  );
};

export default Library;
