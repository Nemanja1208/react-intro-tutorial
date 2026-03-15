import React from 'react';
import { T, clay } from './theme.js';
import { Badge, SectionLabel, Note, CodeBlock, M, KbdTag, ClayCard, StepNumber, Blob } from './components.jsx';

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 0 — TITLE
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideTitle() {
  const tags = ['Komponenter','JSX','State & Props','Hooks','useEffect','Villkorlig Rendering','Listor & Keys'];
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 60px', position: 'relative', overflow: 'hidden' }}>
      <Blob color={T.bl} size={250} top="-60px" left="-80px" delay={0} />
      <Blob color={T.pu} size={200} top="20%" right="-60px" delay={1} />
      <Blob color={T.pi} size={180} bottom="-40px" left="30%" delay={2} />
      <Blob color={T.cy} size={160} bottom="10%" right="15%" delay={3} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="pop-in">
          <Badge text="WEBB-KURS • INTERAKTIV GUIDE" color={T.pu} />
        </div>

        <div className="fade-up delay-1" style={{ marginTop: 32 }}>
          <div style={{ fontSize: 56, fontWeight: 900, color: T.txt, lineHeight: 1.05, letterSpacing: '-.04em' }}>
            Introduktion till
          </div>
          <div className="gradient-anim" style={{
            fontSize: 56, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.04em',
            background: `linear-gradient(135deg, ${T.bl}, ${T.pu}, ${T.pi}, ${T.bl})`,
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            React
          </div>
        </div>

        <p className="fade-up delay-2" style={{ color: T.mut, fontSize: 16, marginTop: 22, maxWidth: 520, lineHeight: 1.8 }}>
          Lär dig bygga moderna, interaktiva webbapplikationer med <strong style={{ color: T.txt }}>React</strong> — från komponenter och JSX till state, props, hooks och dataflöde.
        </p>

        <div className="fade-up delay-3" style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {tags.map((t, i) => (
            <span key={t} className={`pop-in delay-${i + 1}`} style={{
              background: '#fff', color: T.bl, padding: '6px 14px', borderRadius: 14,
              fontSize: 12, fontWeight: 700, boxShadow: clay.sm,
            }}>{t}</span>
          ))}
        </div>

        <div className="fade-up delay-5" style={{ marginTop: 36, display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 18, padding: '12px 28px', boxShadow: clay.md, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="arrow-bounce" style={{ fontSize: 18 }}>→</span>
            <span style={{ color: T.txt, fontSize: 14, fontWeight: 600 }}>Tryck <KbdTag>←</KbdTag> <KbdTag>→</KbdTag> för att navigera</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 1 — WHAT IS REACT?
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideWhatIsReact() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
        <Blob color={T.bl} size={100} top="-30px" right="-30px" delay={0} />
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
          <strong style={{ color: T.txt }}>React</strong> är ett JavaScript-bibliotek utvecklat av Facebook (Meta) för att bygga <strong style={{ color: T.bl }}>användargränssnitt</strong>. Istället för att manipulera DOM manuellt beskriver du <em>vad</em> som ska visas — React tar hand om <em>hur</em> det uppdateras effektivt.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
        {[
          { title: 'Komponentbaserat', icon: '🧩', color: T.bl, desc: 'Bygg ditt UI av återanvändbara, isolerade komponenter. Varje komponent ansvarar för en del av gränssnittet.' },
          { title: 'Deklarativt', icon: '📝', color: T.pu, desc: 'Beskriv vad som ska renderas baserat på data — React uppdaterar DOM automatiskt när data ändras.' },
          { title: 'Virtual DOM', icon: '⚡', color: T.or, desc: 'React skapar en lättviktig kopia av DOM i minnet, jämför ändringar och uppdaterar bara det som faktiskt ändrats.' },
        ].map(({ title, icon, color, desc }, i) => (
          <ClayCard key={title} className={`fade-up delay-${i + 1}`} style={{ padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>{icon}</div>
            <div style={{ color, fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{title}</div>
            <div style={{ color: T.mut, fontSize: 12, lineHeight: 1.6 }}>{desc}</div>
          </ClayCard>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div className="fade-up delay-4">
          <SectionLabel text="Utan React — Imperativt (manuellt)" color={T.re} />
          <CodeBlock lang="js" filename="vanilla.js" maxHeight={180} code={`// Du talar om för DOM exakt VAD den ska göra
const btn = document.createElement("button");
btn.textContent = "Klickad 0 gånger";
btn.addEventListener("click", () => {
    count++;
    btn.textContent = "Klickad " + count + " gånger";
});
document.body.appendChild(btn);
// Manuell DOM-manipulation — svårt att skala!`} />
        </div>
        <div className="fade-up delay-5">
          <SectionLabel text="Med React — Deklarativt (beskriv)" color={T.gr} />
          <CodeBlock lang="js" filename="App.jsx" maxHeight={180} code={`// Du beskriver HUR det ska se ut — React sköter DOM
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Klickad {count} gånger
        </button>
    );
}
// React uppdaterar bara knapp-texten automatiskt!`} />
        </div>
      </div>

      <ClayCard className="fade-up delay-6" style={{ padding: 14, marginTop: 12 }}>
        <SectionLabel text="Virtual DOM — Så fungerar det" color={T.or} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            ['📊 State ändras', T.ye, 'setState()'],
            ['→'],
            ['🔄 Ny Virtual DOM', T.bl, 'React renderar i minnet'],
            ['→'],
            ['🔍 Diffing', T.pu, 'Jämför gammal vs ny'],
            ['→'],
            ['✅ Patch DOM', T.gr, 'Uppdaterar bara ändringarna'],
          ].map((item, i) => (
            item.length === 1
              ? <span key={i} className="arrow-bounce" style={{ color: T.dim, fontSize: 18 }}>{item[0]}</span>
              : <div key={i} style={{ background: item[1] + '15', padding: '8px 14px', borderRadius: 14, textAlign: 'center', boxShadow: clay.sm }}>
                  <div style={{ fontSize: 16 }}>{item[0]}</div>
                  <div style={{ color: T.mut, fontSize: 10, fontFamily: 'monospace', marginTop: 2 }}>{item[2]}</div>
                </div>
          ))}
        </div>
      </ClayCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 2 — JSX
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideJSX() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          <strong style={{ color: T.txt }}>JSX (JavaScript XML)</strong> är en syntax-utökning som låter dig skriva HTML-liknande kod direkt i JavaScript. Det är <strong style={{ color: T.bl }}>inte</strong> HTML — det kompileras till vanliga JavaScript-funktionsanrop av byggverktyget (Vite/Babel).
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div className="fade-up delay-1">
          <SectionLabel text="JSX — HTML i JavaScript" color={T.bl} />
          <CodeBlock lang="js" filename="Greeting.jsx" maxHeight={240} code={`// JSX ser ut som HTML men är JavaScript!
function Greeting() {
    const name = "Anna";
    const isLoggedIn = true;

    return (
        <div className="greeting">
            {/* className istället för class */}
            <h1>Hej {name}!</h1>

            {/* JavaScript-uttryck i {klamrar} */}
            <p>Status: {isLoggedIn ? "Inloggad" : "Utloggad"}</p>

            {/* Inline styles som objekt */}
            <span style={{ color: "blue", fontSize: 14 }}>
                Välkommen tillbaka
            </span>
        </div>
    );
}`} />
        </div>
        <div className="fade-up delay-2">
          <SectionLabel text="Vad JSX kompileras till" color={T.pu} />
          <CodeBlock lang="js" filename="Kompilerat" maxHeight={240} code={`// JSX kompileras till React.createElement()
// Du behöver aldrig skriva detta själv!

// Denna JSX:
<h1 className="title">Hej {name}!</h1>

// Blir detta JavaScript:
React.createElement(
    "h1",
    { className: "title" },
    "Hej ", name, "!"
);

// React.createElement() skapar ett "element-objekt"
// som React använder för Virtual DOM`} />
          <Note type="tip">Du behöver aldrig skriva <M>React.createElement()</M> manuellt — JSX gör det åt dig! Men det är bra att förstå vad som händer under huven.</Note>
        </div>
      </div>

      <SectionLabel text="Viktiga JSX-regler" color={T.or} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[
          { rule: 'Returnera ETT rot-element', color: T.re, bad: 'return <h1>A</h1><p>B</p>', good: 'return <><h1>A</h1><p>B</p></>', tip: 'Använd <> (Fragment) för att wrappa flera element utan extra DOM-nod' },
          { rule: 'className istället för class', color: T.or, bad: '<div class="box">', good: '<div className="box">', tip: '"class" är ett reserverat ord i JavaScript — JSX använder className' },
          { rule: 'Alla taggar måste stängas', color: T.ye, bad: '<img src="pic.jpg">', good: '<img src="pic.jpg" />', tip: 'Self-closing taggar som <img>, <br>, <input> kräver / i JSX' },
        ].map(({ rule, color, bad, good, tip }, i) => (
          <ClayCard key={rule} className={`fade-up delay-${i + 3}`} style={{ padding: 12 }}>
            <div style={{ color, fontWeight: 800, fontSize: 12, marginBottom: 8 }}>{rule}</div>
            <div style={{ background: T.reP, padding: '4px 8px', borderRadius: 8, marginBottom: 4 }}>
              <code style={{ color: T.re, fontSize: 11, fontFamily: "'Fira Code', monospace" }}>✗ {bad}</code>
            </div>
            <div style={{ background: T.grP, padding: '4px 8px', borderRadius: 8, marginBottom: 6 }}>
              <code style={{ color: T.gr, fontSize: 11, fontFamily: "'Fira Code', monospace" }}>✓ {good}</code>
            </div>
            <div style={{ color: T.mut, fontSize: 11, lineHeight: 1.5 }}>{tip}</div>
          </ClayCard>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 3 — COMPONENTS & PROPS
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideComponents() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          En <strong style={{ color: T.txt }}>komponent</strong> är en funktion som returnerar JSX. Den är byggstenen i varje React-app. <strong style={{ color: T.bl }}>Props</strong> (properties) är data du skickar in till en komponent utifrån — tänk på dem som funktionsparametrar.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="Din första komponent" color={T.gr} />
            <CodeBlock lang="js" filename="ProductCard.jsx" maxHeight={280} code={`// En komponent = en funktion som returnerar JSX
// Komponentnamn MÅSTE börja med stor bokstav!
function ProductCard({ name, price, inStock }) {
    // Props tas emot som ett objekt (destructuring)
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p className="price">{price} kr</p>

            {/* Villkorlig rendering */}
            {inStock
                ? <span className="badge green">I lager</span>
                : <span className="badge red">Slut</span>
            }
        </div>
    );
}

// Använd komponenten som en HTML-tagg:
<ProductCard
    name="React-bok"
    price={299}
    inStock={true}
/>`} />
          </div>
        </div>
        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="Komposition — komponenter i komponenter" color={T.bl} />
            <CodeBlock lang="js" filename="App.jsx" maxHeight={280} code={`// Större komponenter byggs av mindre
function ProductList() {
    const products = [
        { id: 1, name: "Laptop", price: 9999 },
        { id: 2, name: "Mus", price: 349 },
        { id: 3, name: "Tangentbord", price: 899 },
    ];

    return (
        <div className="product-list">
            <h2>Produkter</h2>
            {/* Rendera en lista av komponenter */}
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    inStock={true}
                />
            ))}
        </div>
    );
}`} />
          </div>
          <Note type="info"><M>key</M> är obligatoriskt när du renderar listor — det hjälper React identifiera vilka element som ändrats. Använd alltid unika ID:n, inte array-index.</Note>
        </div>
      </div>

      <ClayCard className="fade-up delay-4" style={{ padding: 14 }}>
        <SectionLabel text="Props-flödet visualiserat" color={T.or} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            ['📦 Förälder', T.bl, 'ProductList'],
            ['→'],
            ['🏷️ Props', T.or, 'name, price, inStock'],
            ['→'],
            ['🧩 Barn', T.gr, 'ProductCard'],
            ['→'],
            ['🖥️ DOM', T.pu, '<div>Laptop 9999 kr</div>'],
          ].map((item, i) => (
            item.length === 1
              ? <span key={i} className="arrow-bounce" style={{ color: T.dim, fontSize: 18 }}>{item[0]}</span>
              : <div key={i} style={{ background: item[1] + '15', padding: '8px 14px', borderRadius: 14, textAlign: 'center', boxShadow: clay.sm }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{item[0]}</div>
                  <div style={{ color: T.mut, fontSize: 10, fontFamily: 'monospace', marginTop: 2 }}>{item[2]}</div>
                </div>
          ))}
        </div>
        <Note type="warn" >Props är <strong>read-only</strong> — en komponent får aldrig ändra sina egna props. Data flödar alltid nedåt (förälder → barn), aldrig uppåt.</Note>
      </ClayCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 4 — STATE & useState
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideState() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          <strong style={{ color: T.txt }}>State</strong> är data som en komponent <strong style={{ color: T.bl }}>äger och kan ändra</strong>. Till skillnad från props (som kommer utifrån) är state intern — och när state ändras <strong style={{ color: T.gr }}>renderas komponenten om automatiskt</strong>.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="useState — grunderna" color={T.bl} />
            <CodeBlock lang="js" filename="Counter.jsx" maxHeight={300} code={`import { useState } from 'react';

function Counter() {
    // useState returnerar [värde, sätter-funktion]
    // 0 är initialt värde
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Anna");

    return (
        <div>
            <h2>Hej {name}!</h2>
            <p>Antal klick: {count}</p>

            {/* setCount triggar omrendering! */}
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>

            <button onClick={() => setCount(0)}>
                Nollställ
            </button>

            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    );
}`} />
          </div>
          <Note type="danger">Ändra <strong>aldrig</strong> state direkt! <M>count = 5</M> fungerar inte — använd alltid <M>setCount(5)</M>. React vet inte att något ändrats utan setter-funktionen.</Note>
        </div>

        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="State med objekt och arrayer" color={T.or} />
            <CodeBlock lang="js" filename="TodoApp.jsx" maxHeight={300} code={`function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Lär dig React", done: false },
        { id: 2, text: "Bygg en app", done: false },
    ]);

    // VIKTIGT: Skapa alltid NYA arrayer/objekt!
    // Mutera ALDRIG state direkt

    // ✓ Lägg till
    function addTodo(text) {
        setTodos([
            ...todos,  // spread = kopiera alla gamla
            { id: Date.now(), text, done: false }
        ]);
    }

    // ✓ Ta bort
    function removeTodo(id) {
        setTodos(todos.filter(t => t.id !== id));
    }

    // ✓ Uppdatera
    function toggleTodo(id) {
        setTodos(todos.map(t =>
            t.id === id
                ? { ...t, done: !t.done }
                : t
        ));
    }

    // ...rendering
}`} />
          </div>
          <Note type="tip">Använd alltid <strong>spread-operatorn</strong> <M>...state</M> för att skapa kopior. React jämför referensen — utan ny kopia ser React ingen ändring och hoppar över omrendering.</Note>
        </div>
      </div>

      <ClayCard className="fade-up delay-4" style={{ padding: 14 }}>
        <SectionLabel text="State vs Props" color={T.ye} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <ClayCard color="bl" style={{ padding: 12 }}>
            <div style={{ color: T.bl, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>State</div>
            {['Ägs av komponenten själv', 'Kan ändras med setState()', 'Trigger omrendering vid ändring', 'Intern data (räknare, formulär, toggles)'].map(s => (
              <div key={s} style={{ display: 'flex', gap: 6, marginBottom: 3 }}>
                <span style={{ color: T.bl, fontSize: 10, marginTop: 3 }}>●</span>
                <span style={{ color: T.txt, fontSize: 12 }}>{s}</span>
              </div>
            ))}
          </ClayCard>
          <ClayCard color="or" style={{ padding: 12 }}>
            <div style={{ color: T.or, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Props</div>
            {['Skickas från förälder-komponent', 'Read-only — kan inte ändras', 'Ny prop → barn renderas om', 'Extern data (namn, listor, callbacks)'].map(s => (
              <div key={s} style={{ display: 'flex', gap: 6, marginBottom: 3 }}>
                <span style={{ color: T.or, fontSize: 10, marginTop: 3 }}>●</span>
                <span style={{ color: T.txt, fontSize: 12 }}>{s}</span>
              </div>
            ))}
          </ClayCard>
        </div>
      </ClayCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 5 — EVENT HANDLING
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideEvents() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          React hanterar events genom <strong style={{ color: T.bl }}>camelCase</strong>-attribut istället för HTMLs lowercase. Du skickar en <strong style={{ color: T.txt }}>funktion</strong> som event handler, inte en sträng. React använder ett <strong style={{ color: T.pu }}>syntetiskt event-system</strong> som normaliserar skillnader mellan webbläsare.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="Vanliga event handlers" color={T.gr} />
            <CodeBlock lang="js" filename="Events.jsx" maxHeight={320} code={`function EventDemo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    // Click event
    function handleClick() {
        alert("Knappen klickades!");
    }

    // Form submit — preventDefault() stoppar reload
    function handleSubmit(event) {
        event.preventDefault();
        setItems([...items, text]);
        setText(""); // Rensa input
    }

    // Input change — kontrollerat formulär
    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={handleChange}
                placeholder="Skriv här..."
            />
            <button type="submit">Lägg till</button>
            <button type="button" onClick={handleClick}>
                Klicka mig
            </button>
        </form>
    );
}`} />
          </div>
        </div>
        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="Event handler-mönster" color={T.or} />
            <CodeBlock lang="js" maxHeight={180} code={`// ✓ Skicka en funktion (referens)
<button onClick={handleClick}>OK</button>

// ✓ Arrow function (med argument)
<button onClick={() => deleteItem(id)}>Ta bort</button>

// ✗ FEL — anropar funktionen direkt vid render!
<button onClick={handleClick()}>BUGGY!</button>
// handleClick() KÖRS genast, inte vid klick!

// ✓ Event-objektet skickas automatiskt
<input onChange={(e) => setText(e.target.value)} />
<form onSubmit={(e) => { e.preventDefault(); }} />`} />
          </div>

          <ClayCard className="fade-up delay-3" color="ye" style={{ padding: 14, marginTop: 10 }}>
            <SectionLabel text="React vs HTML events" color={T.ye} />
            {[
              ['onclick="handler()"', 'onClick={handler}', 'camelCase + funktion'],
              ['onchange', 'onChange', 'Fires vid varje tangent (inte blur)'],
              ['onsubmit', 'onSubmit', 'e.preventDefault() behövs fortfarande'],
              ['class=', 'className=', 'Reserverat ord i JS'],
              ['for=', 'htmlFor=', 'Reserverat ord i JS'],
            ].map(([html, react, note]) => (
              <div key={html} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.3fr', gap: 6, marginBottom: 4, fontSize: 11.5, fontFamily: 'monospace' }}>
                <span style={{ color: T.re, textDecoration: 'line-through' }}>{html}</span>
                <span style={{ color: T.gr, fontWeight: 700 }}>{react}</span>
                <span style={{ color: T.mut, fontFamily: 'Inter, sans-serif' }}>{note}</span>
              </div>
            ))}
          </ClayCard>

          <Note type="info"><strong>Kontrollerade formulär:</strong> Inputens <M>value</M> styrs av state, och <M>onChange</M> uppdaterar state. React är den enda källan till sanning — inga synk-problem!</Note>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 6 — useEffect
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideUseEffect() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          <M>useEffect</M> låter dig utföra <strong style={{ color: T.txt }}>sidoeffekter</strong> i komponenter — saker som inte hör till själva renderingen: hämta data från API, starta timers, lyssna på events, eller uppdatera dokumentets titel. Det körs <strong style={{ color: T.bl }}>efter</strong> att komponenten renderats.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="useEffect — syntaxen" color={T.bl} />
            <CodeBlock lang="js" filename="DataFetcher.jsx" maxHeight={300} code={`import { useState, useEffect } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(callback, [beroenden])
    useEffect(() => {
        // Denna kod körs EFTER render

        async function fetchData() {
            const res = await fetch("/api/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }

        fetchData();

        // Cleanup-funktion (valfri)
        return () => {
            // Körs när komponenten avmonteras
            // eller innan effekten körs igen
            console.log("Cleanup!");
        };
    }, []); // [] = kör bara vid montering (mount)

    if (loading) return <p>Laddar...</p>;

    return (
        <ul>
            {products.map(p => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    );
}`} />
          </div>
        </div>
        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="Dependency array — styr när effekten körs" color={T.or} />
            <CodeBlock lang="js" maxHeight={200} code={`// 1. Utan array — körs efter VARJE render
useEffect(() => {
    console.log("Körs varje render");
});

// 2. Tom array [] — körs EN gång (mount)
useEffect(() => {
    fetchData(); // Perfekt för API-anrop!
}, []);

// 3. Med beroenden — körs när de ändras
useEffect(() => {
    fetchUser(userId); // Körs när userId ändras
}, [userId]);

// 4. Cleanup — körs vid avmontering/innan ny körning
useEffect(() => {
    const id = setInterval(() => tick(), 1000);
    return () => clearInterval(id); // Cleanup!
}, []);`} />
          </div>

          <ClayCard className="fade-up delay-3" color="pu" style={{ padding: 14, marginTop: 10 }}>
            <SectionLabel text="Vanliga sidoeffekter" color={T.pu} />
            {[
              ['🌐', 'API-anrop (fetch)', '[], [searchQuery]'],
              ['⏱️', 'Timers (setInterval)', '[] + cleanup'],
              ['📄', 'Document title', '[title]'],
              ['🎧', 'Event listeners', '[] + cleanup'],
              ['💾', 'localStorage', '[data]'],
            ].map(([icon, desc, deps]) => (
              <div key={desc} style={{ display: 'flex', gap: 8, marginBottom: 5, alignItems: 'center' }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span style={{ color: T.txt, fontSize: 12, fontWeight: 600, flex: 1 }}>{desc}</span>
                <code style={{ color: T.pu, fontSize: 11, background: T.puP, padding: '2px 6px', borderRadius: 6 }}>{deps}</code>
              </div>
            ))}
          </ClayCard>
          <Note type="danger"><strong>Oändlig loop-fara!</strong> Om du sätter state i useEffect utan rätt beroenden körs effekten → state ändras → omrendering → effekten körs igen → ∞. Alltid ange dependency array!</Note>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 7 — CONDITIONAL RENDERING
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideConditional() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          I React kan du visa olika UI beroende på state, props eller villkor — precis som vanliga <M>if</M>-satser i JavaScript. Allt sker direkt i JSX med <strong style={{ color: T.bl }}>ternary-operatorn</strong>, <strong style={{ color: T.gr }}>&&-operatorn</strong> eller <strong style={{ color: T.or }}>early return</strong>.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="Tre tekniker för villkorlig rendering" color={T.bl} />
            <CodeBlock lang="js" filename="Patterns.jsx" maxHeight={360} code={`function Dashboard({ user, notifications }) {

    // TEKNIK 1: Early return
    // Bra för laddning/felhantering
    if (!user) {
        return <p>Laddar användare...</p>;
    }

    return (
        <div>
            <h1>Hej {user.name}!</h1>

            {/* TEKNIK 2: Ternary (? :)
                Bra för att välja mellan TVÅ alternativ */}
            {user.isAdmin
                ? <AdminPanel />
                : <UserPanel />
            }

            {/* TEKNIK 3: && (logical AND)
                Bra för att visa ELLER dölja något */}
            {notifications.length > 0 && (
                <Badge count={notifications.length} />
            )}

            {/* Kombinera! */}
            {user.avatar
                ? <img src={user.avatar} alt="" />
                : <DefaultAvatar />
            }
        </div>
    );
}`} />
          </div>
        </div>

        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="Praktiskt exempel — laddningsflöde" color={T.gr} />
            <CodeBlock lang="js" filename="UserProfile.jsx" maxHeight={280} code={`function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/users/" + userId)
            .then(res => {
                if (!res.ok) throw new Error("404");
                return res.json();
            })
            .then(data => setUser(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [userId]);

    // Tre olika states att hantera:
    if (loading) return <Spinner />;
    if (error)   return <ErrorMsg msg={error} />;
    if (!user)   return <p>Ingen data</p>;

    // "Happy path" — allt gick bra
    return (
        <div className="profile">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {user.isAdmin && <Badge text="Admin" />}
        </div>
    );
}`} />
          </div>
          <Note type="warn">Akta dig med <M>&&</M> och siffror! <M>{`{count && <Text />}`}</M> renderar <strong>0</strong> om count är 0, inte ingenting. Använd <M>{`{count > 0 && ...}`}</M> istället.</Note>
        </div>
      </div>

      <ClayCard className="fade-up delay-4" style={{ padding: 14 }}>
        <SectionLabel text="Renderingsflöde" color={T.cy} />
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['loading?', '→', 'error?', '→', '!data?', '→', 'Rendera UI'].map((item, i) => (
            <span key={i} style={{
              fontSize: 12, fontFamily: 'monospace', fontWeight: 700,
              color: item === '→' ? T.dim : i < 6 ? T.or : T.gr,
              ...(item !== '→' ? { background: i < 6 ? T.orP : T.grP, padding: '4px 10px', borderRadius: 10, boxShadow: clay.sm } : {}),
            }}>{item}</span>
          ))}
        </div>
      </ClayCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 8 — LISTS & KEYS
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideLists() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          En av de vanligaste uppgifterna i React: <strong style={{ color: T.txt }}>rendera en lista</strong> med data. Du använder JavaScripts <M>.map()</M> för att omvandla en array till JSX-element. Varje element <strong style={{ color: T.re }}>måste</strong> ha en unik <M>key</M>-prop.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="Rendera listor med .map()" color={T.bl} />
            <CodeBlock lang="js" filename="TodoList.jsx" maxHeight={320} code={`function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Handla mat", done: false },
        { id: 2, text: "Träna", done: true },
        { id: 3, text: "Koda React", done: false },
    ]);

    return (
        <ul>
            {todos.map(todo => (
                // key MÅSTE vara unik per element!
                <li
                    key={todo.id}
                    style={{
                        textDecoration: todo.done
                            ? "line-through"
                            : "none"
                    }}
                >
                    <span>{todo.text}</span>
                    <button onClick={() =>
                        setTodos(todos.map(t =>
                            t.id === todo.id
                                ? { ...t, done: !t.done }
                                : t
                        ))
                    }>
                        {todo.done ? "Ångra" : "Klar"}
                    </button>
                </li>
            ))}
        </ul>
    );
}`} />
          </div>
        </div>
        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="Filtrera och sortera" color={T.or} />
            <CodeBlock lang="js" filename="FilteredList.jsx" maxHeight={240} code={`function FilteredList({ items }) {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    // Filtrera UTAN att mutera original-arrayen
    const filtered = items
        .filter(item => {
            if (filter === "done") return item.done;
            if (filter === "todo") return !item.done;
            return true; // "all"
        })
        .filter(item =>
            item.text.toLowerCase()
                .includes(search.toLowerCase())
        );

    return (
        <div>
            <input
                placeholder="Sök..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
            >
                <option value="all">Alla</option>
                <option value="done">Klara</option>
                <option value="todo">Kvar</option>
            </select>

            <p>{filtered.length} resultat</p>
            {filtered.map(item => (
                <TodoItem key={item.id} {...item} />
            ))}
        </div>
    );
}`} />
          </div>

          <ClayCard className="fade-up delay-3" color="re" style={{ padding: 12, marginTop: 8 }}>
            <SectionLabel text="Varför key?" color={T.re} />
            <p style={{ color: T.mut, fontSize: 12, lineHeight: 1.6, marginBottom: 6 }}>
              Utan <M>key</M> kan React inte veta vilka element som lagts till, tagits bort eller flyttats. Det leder till <strong style={{ color: T.re }}>buggar och dålig prestanda</strong>.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ background: T.reP, padding: 8, borderRadius: 10 }}>
                <div style={{ color: T.re, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>✗ Dåligt</div>
                <code style={{ color: T.re, fontSize: 11, fontFamily: "'Fira Code', monospace" }}>key={'{index}'}</code>
                <div style={{ color: T.mut, fontSize: 10, marginTop: 2 }}>Buggar vid sortering/borttagning</div>
              </div>
              <div style={{ background: T.grP, padding: 8, borderRadius: 10 }}>
                <div style={{ color: T.gr, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>✓ Bra</div>
                <code style={{ color: T.gr, fontSize: 11, fontFamily: "'Fira Code', monospace" }}>key={'{item.id}'}</code>
                <div style={{ color: T.mut, fontSize: 10, marginTop: 2 }}>Unik, stabil identifierare</div>
              </div>
            </div>
          </ClayCard>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 9 — DATA FLOW
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideDataFlow() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          I React flödar data <strong style={{ color: T.bl }}>nedåt</strong> (förälder → barn via props). Men vad händer när ett barn behöver <strong style={{ color: T.or }}>kommunicera uppåt</strong>? Lösningen är <strong style={{ color: T.txt }}>lifting state up</strong> — flytta state till den närmaste gemensamma föräldern och skicka ner callbacks.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="Lifting state up — komplett mönster" color={T.bl} />
            <CodeBlock lang="js" filename="App.jsx" maxHeight={360} code={`// STATE LEVER I FÖRÄLDERN (App)
function App() {
    // 1. State definieras här (gemensam förälder)
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    // 2. Callbacks som ändrar state
    function addTodo(text) {
        setTodos([
            ...todos,
            { id: Date.now(), text, done: false }
        ]);
    }

    function toggleTodo(id) {
        setTodos(todos.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
        ));
    }

    // Härledd data (computed from state)
    const filtered = todos.filter(t => {
        if (filter === "done") return t.done;
        if (filter === "todo") return !t.done;
        return true;
    });

    // 3. Skicka data + callbacks som props
    return (
        <div>
            <AddForm onAdd={addTodo} />
            <FilterBar
                filter={filter}
                onFilterChange={setFilter}
            />
            <TodoList
                items={filtered}
                onToggle={toggleTodo}
            />
            <Stats total={todos.length}
                   done={todos.filter(t=>t.done).length}
            />
        </div>
    );
}`} />
          </div>
        </div>
        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="Barn-komponenterna" color={T.gr} />
            <CodeBlock lang="js" filename="Components.jsx" maxHeight={260} code={`// Barn 1: Formulär — anropar callback uppåt
function AddForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);      // Anropa förälderns funktion!
        setText("");       // Rensa lokalt state
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Ny todo..."
            />
            <button type="submit">Lägg till</button>
        </form>
    );
}

// Barn 2: Lista — tar emot data + callback
function TodoList({ items, onToggle }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={() => onToggle(item.id)}>
                        {item.done ? "✓" : "○"}
                    </button>
                </li>
            ))}
        </ul>
    );
}`} />
          </div>
          <Note type="info"><strong>Enkelriktat dataflöde:</strong> Data (state) flödar nedåt via props. Händelser (callbacks) flödar uppåt via funktions-props. Detta gör appen förutsägbar och enkel att debugga.</Note>
        </div>
      </div>

      <ClayCard className="fade-up delay-4" style={{ padding: 14 }}>
        <SectionLabel text="Dataflödet visualiserat" color={T.pu} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ background: T.blP, padding: '10px 24px', borderRadius: 16, boxShadow: clay.md, textAlign: 'center' }}>
            <div style={{ color: T.bl, fontWeight: 800, fontSize: 14 }}>App (state: todos, filter)</div>
            <div style={{ color: T.mut, fontSize: 11, marginTop: 2 }}>Äger all data, skickar ned via props</div>
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ color: T.bl, fontSize: 12, fontFamily: 'monospace' }}>↓ props (data)</span>
            <span style={{ color: T.dim }}>|</span>
            <span style={{ color: T.or, fontSize: 12, fontFamily: 'monospace' }}>↑ callbacks (events)</span>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              ['AddForm', T.gr, 'onAdd()'],
              ['FilterBar', T.or, 'onFilterChange()'],
              ['TodoList', T.pu, 'onToggle()'],
              ['Stats', T.ye, 'read-only'],
            ].map(([name, color, cb]) => (
              <div key={name} style={{ background: color + '15', padding: '8px 16px', borderRadius: 14, textAlign: 'center', boxShadow: clay.sm }}>
                <div style={{ color, fontWeight: 700, fontSize: 13 }}>{name}</div>
                <div style={{ color: T.mut, fontSize: 10, fontFamily: 'monospace', marginTop: 2 }}>{cb}</div>
              </div>
            ))}
          </div>
        </div>
      </ClayCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 10 — FULL EXAMPLE
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideFullExample() {
  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          Här är ett <strong style={{ color: T.txt }}>komplett, fungerande React-projekt</strong> som kombinerar allt du lärt dig: komponenter, state, props, events, useEffect, villkorlig rendering och listor.
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <div className="fade-up delay-1">
            <SectionLabel text="App.jsx — Huvudkomponent" color={T.bl} />
            <CodeBlock lang="js" filename="App.jsx" maxHeight={460} code={`import { useState, useEffect } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    // Hämta sparade todos vid start
    useEffect(() => {
        const saved = localStorage.getItem("todos");
        if (saved) setTodos(JSON.parse(saved));
    }, []);

    // Spara till localStorage vid ändring
    useEffect(() => {
        localStorage.setItem(
            "todos", JSON.stringify(todos)
        );
    }, [todos]);

    function addTodo(e) {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: input,
                done: false
            }
        ]);
        setInput("");
    }

    function toggleTodo(id) {
        setTodos(todos.map(t =>
            t.id === id
                ? { ...t, done: !t.done }
                : t
        ));
    }

    function deleteTodo(id) {
        setTodos(todos.filter(t => t.id !== id));
    }

    // Härledd data
    const filtered = todos.filter(t => {
        if (filter === "done") return t.done;
        if (filter === "todo") return !t.done;
        return true;
    });

    const doneCount = todos.filter(t => t.done).length;

    return (
        <div className="app">
            <h1>Todo-app</h1>
            <p>{doneCount}/{todos.length} klara</p>

            <form onSubmit={addTodo}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ny uppgift..."
                />
                <button type="submit">Lägg till</button>
            </form>

            <div className="filters">
                {["all","todo","done"].map(f => (
                    <button
                        key={f}
                        className={filter === f ? "active" : ""}
                        onClick={() => setFilter(f)}
                    >
                        {f === "all" ? "Alla"
                         : f === "done" ? "Klara"
                         : "Kvar"}
                    </button>
                ))}
            </div>

            {filtered.length === 0
                ? <p className="empty">Inga todos</p>
                : <ul>
                    {filtered.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    ))}
                  </ul>
            }
        </div>
    );
}`} />
          </div>
        </div>
        <div>
          <div className="fade-up delay-2">
            <SectionLabel text="TodoItem.jsx — Barn-komponent" color={T.gr} />
            <CodeBlock lang="js" filename="TodoItem.jsx" maxHeight={200} code={`// Separat komponent — enklare att testa och underhålla
function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={todo.done ? "done" : ""}>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            <span className="text">{todo.text}</span>
            <button
                className="delete"
                onClick={() => onDelete(todo.id)}
            >
                ✕
            </button>
        </li>
    );
}`} />
          </div>

          <div className="fade-up delay-3">
            <SectionLabel text="Projektstruktur" color={T.or} />
            <ClayCard style={{ padding: 14 }}>
              {[
                ['📁 src/', T.bl, 'Källkod'],
                ['  📄 App.jsx', T.gr, 'Huvudkomponent med state'],
                ['  📄 TodoItem.jsx', T.gr, 'Barn-komponent'],
                ['  📄 main.jsx', T.pu, 'Entry point (ReactDOM)'],
                ['  📄 index.css', T.or, 'Styling'],
                ['📄 index.html', T.ye, 'HTML-shell med <div id="root">'],
                ['📄 package.json', T.mut, 'Beroenden (react, react-dom)'],
              ].map(([name, color, desc]) => (
                <div key={name} style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
                  <code style={{ color, fontSize: 12, fontFamily: "'Fira Code', monospace", minWidth: 170 }}>{name}</code>
                  <span style={{ color: T.mut, fontSize: 11.5 }}>{desc}</span>
                </div>
              ))}
            </ClayCard>
          </div>

          <ClayCard className="fade-up delay-5" color="cy" style={{ padding: 12, marginTop: 8 }}>
            <SectionLabel text="Koncept som används" color={T.cy} />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['useState', 'useEffect', 'Props', 'Callbacks', '.map()', '.filter()', 'Conditional', 'Forms', 'localStorage'].map(c => (
                <span key={c} style={{ background: T.cyP, color: T.cy, padding: '3px 10px', borderRadius: 10, fontSize: 11, fontWeight: 700, boxShadow: clay.sm }}>{c}</span>
              ))}
            </div>
          </ClayCard>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE 11 — CHECKLIST
   ═══════════════════════════════════════════════════════════════════════════ */
export function SlideChecklist() {
  const groups = [
    { cat: 'Komponenter & JSX', c: T.bl, items: [
      [true, 'Komponentnamn börjar med stor bokstav', 'React skiljer på <div> (HTML) och <MyComp> (komponent) via versaler'],
      [true, 'Returnera alltid ETT rot-element', 'Använd <> (Fragment) för att wrappa utan extra DOM-nod'],
      [false, 'Använder class istället för className', 'class är reserverat i JS — JSX använder className'],
      [true, 'Alla taggar stängs (self-closing /)', '<img />, <br />, <input /> kräver self-closing i JSX'],
    ]},
    { cat: 'State & Hooks', c: T.pu, items: [
      [false, 'Muterar state direkt (push, splice)', 'Skapa alltid NYA arrayer/objekt med spread: [...arr, nytt]'],
      [true, 'useState för komponent-lokal data', 'Räknare, formulär, toggles — allt som ändras av användaren'],
      [false, 'useEffect utan dependency array', 'Orsakar oändlig loop! Ange alltid [] eller [beroenden]'],
      [true, 'Cleanup i useEffect (return-funktion)', 'Rensa timers, event-listeners vid avmontering'],
    ]},
    { cat: 'Listor & Data', c: T.or, items: [
      [true, 'Unik key-prop på alla list-element', 'Använd id, inte index — annars buggar vid sortering/borttagning'],
      [true, 'Lifting state up till gemensam förälder', 'Dela data mellan syskon via förälder-komponent'],
      [false, 'Prop drilling genom 5+ nivåer', 'Överväg Context API eller state management (Redux, Zustand)'],
      [true, 'Envägs dataflöde (top-down)', 'Props nedåt, callbacks uppåt — aldrig mutera förälderns state direkt'],
    ]},
  ];

  return (
    <div>
      <ClayCard className="fade-up" style={{ padding: 14, marginBottom: 14 }}>
        <p style={{ color: T.mut, fontSize: 13.5, lineHeight: 1.7 }}>
          Här är de <strong style={{ color: T.txt }}>vanligaste misstagen</strong> och <strong style={{ color: T.gr }}>bästa praxis</strong> i React. Kryssa av dessa när du bygger din app!
        </p>
      </ClayCard>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 14 }}>
        {groups.map(({ cat, c, items }, gi) => (
          <ClayCard key={cat} className={`fade-up delay-${gi + 1}`} style={{ padding: 14 }}>
            <SectionLabel text={cat} color={c} />
            {items.map(([ok, text, tip], ii) => (
              <div key={text} className={`fade-up delay-${gi + ii + 2}`} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 22, height: 22, borderRadius: 8,
                    background: ok ? T.grP : T.reP, color: ok ? T.gr : T.re,
                    fontSize: 12, fontWeight: 800, flexShrink: 0,
                    boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.6)',
                  }}>{ok ? '✓' : '✗'}</span>
                  <span style={{ color: T.txt, fontSize: 12.5, lineHeight: 1.4, fontWeight: 600 }}>{text}</span>
                </div>
                <div style={{ color: T.mut, fontSize: 11.5, marginLeft: 30, marginTop: 3, lineHeight: 1.5 }}>{tip}</div>
              </div>
            ))}
          </ClayCard>
        ))}
      </div>

      <ClayCard className="fade-up delay-6" style={{ padding: 14 }}>
        <SectionLabel text="Snabbreferens — minimal React-komponent" color={T.cy} />
        <CodeBlock lang="js" filename="Template.jsx" maxHeight={180} code={`import { useState, useEffect } from 'react';

function MyComponent({ title, items }) {
    const [search, setSearch] = useState("");

    // Filtrera baserat på state
    const filtered = items.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>{title}</h2>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Sök..."
            />
            {filtered.length === 0
                ? <p>Inga resultat</p>
                : <ul>
                    {filtered.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
            }
        </div>
    );
}

export default MyComponent;`} />
      </ClayCard>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SLIDE REGISTRY
   ═══════════════════════════════════════════════════════════════════════════ */
export const SLIDES = [
  { id: 'title',       badge: 'WEBB-KURS',       bc: T.pu, title: 'Introduktion till React',           Component: SlideTitle,       isTitle: true },
  { id: 'what',        badge: 'VAD ÄR REACT?',   bc: T.bl, title: 'Vad är React och varför?',          Component: SlideWhatIsReact },
  { id: 'jsx',         badge: 'JSX',              bc: T.pu, title: 'JSX — HTML i JavaScript',           Component: SlideJSX },
  { id: 'components',  badge: 'KOMPONENTER',      bc: T.gr, title: 'Komponenter & Props',               Component: SlideComponents },
  { id: 'state',       badge: 'STATE',            bc: T.or, title: 'State & useState',                  Component: SlideState },
  { id: 'events',      badge: 'EVENTS',           bc: T.ye, title: 'Event Handling',                    Component: SlideEvents },
  { id: 'useeffect',   badge: 'HOOKS',            bc: T.bl, title: 'useEffect & Sidoeffekter',          Component: SlideUseEffect },
  { id: 'conditional', badge: 'RENDERING',        bc: T.cy, title: 'Villkorlig Rendering',              Component: SlideConditional },
  { id: 'lists',       badge: 'LISTOR',           bc: T.re, title: 'Listor & Keys',                     Component: SlideLists },
  { id: 'dataflow',    badge: 'DATAFLÖDE',        bc: T.pu, title: 'Dataflöde & Lifting State Up',      Component: SlideDataFlow },
  { id: 'example',     badge: 'FULL EXEMPEL',     bc: T.cy, title: 'Komplett Todo-app',                 Component: SlideFullExample },
  { id: 'checklist',   badge: 'CHECKLISTA',       bc: T.or, title: 'Vanliga misstag & bästa praxis',    Component: SlideChecklist },
];
