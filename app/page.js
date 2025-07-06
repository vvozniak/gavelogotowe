import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Brain, Clock, Scale, Phone } from "lucide-react"

export default function GaveloWebsite() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#01161e" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#01161e", borderColor: "#334155" }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="/logo1.svg" alt="Gavelo Logo" className="h-32 w-auto" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#" className="text-slate-400 hover:text-white transition-colors font-light">
                Funkcje
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors font-light">
                O nas
              </a>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+48 882 069 684</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 100vh */}
      <section className="h-screen flex items-center" style={{ backgroundColor: "#01161e" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-7xl font-serif font-light mb-8 leading-tight text-white">
                Przestań szukać,
                <br />
                <span className="font-normal">zacznij działać</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-lg">
                Gavelo to wyszukiwarka kontekstowa do orzeczeń sądowych oparta na modelu sztucznej inteligencji, która
                na zawsze zmieni rynek LegalTech.
              </p>
              <div className="flex space-x-6">
                <Button className="px-8 py-3 font-light" style={{ backgroundColor: "white", color: "#01161e" }}>
                  Dowiedz się więcej
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 font-light bg-transparent"
                  style={{ borderColor: "#64748b", color: "#cbd5e1" }}
                >
                  Wypróbuj teraz
                </Button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <div
                  className="rounded-lg border aspect-video flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
                >
                  <img
                    src="/interfejs.png"
                    alt="Interfejs aplikacji Gavelo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-12 lg:px-20" style={{ backgroundColor: "#01161e" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-slate-500 mb-6 font-light tracking-wider">O NAS</div>
          <h2 className="text-4xl font-serif font-light text-white mb-12 leading-tight">
            Nasza podróż: Przyjaźń, Pasja, Innowacja
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 font-light">
            Jesteśmy grupą przyjaciół, absolwentów ówcześnie najlepszego liceum na Śląsku, którzy rozeszli się po całej
            Polsce, wybierając odmienne kierunki studiów. Mimo rozłąki i setek dzielących nas kilometrów wciąż rodziły
            się między nami ciekawe pomysły, które teraz próbujemy przekuć w realną innowację.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            W ten sposób połączyliśmy nasze zainteresowania, a także kompetencje i stworzyliśmy Gavelo – kontekstową
            wyszukiwarkę orzeczeń prawniczych.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-12 lg:px-20" style={{ backgroundColor: "#01161e" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-light text-white mb-8 leading-tight">
              Narzędzie, które wspiera prawnika
            </h2>
          </div>

          <div className="space-y-20">
            {/* Benefit 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border"
                  style={{ backgroundColor: "#334155", borderColor: "#475569" }}
                >
                  <Brain className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-6">Wsparcie kontekstowe AI</h3>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  Zautomatyzowane wyszukiwanie orzeczeń z wykorzystaniem kontekstowego AI pozwala prawnikowi skupić się
                  na problemie, nie na żmudnym researchu. GAVELO to osobisty asystent, który rozumie treść zapytania.
                </p>
              </div>
              <div
                className="rounded border p-12 flex items-center justify-center min-h-[300px]"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
              >
                <div className="text-center">
                  <Brain className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-500 font-light">Kontekstowe AI</p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className="rounded border p-12 flex items-center justify-center min-h-[300px] lg:order-first"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
              >
                <div className="text-center">
                  <Search className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-500 font-light">Precyzyjne wyszukiwanie</p>
                </div>
              </div>
              <div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border"
                  style={{ backgroundColor: "#334155", borderColor: "#475569" }}
                >
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-6">
                  Znacznie podnosi dokładność wyszukania
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  Nasza wyszukiwarka wykorzystuje modele językowe, które analizują znaczenie, a nie tylko frazy. Dzięki
                  temu znajdziesz trafne orzeczenia, nawet jeśli pytasz nieprecyzyjnie. Koniec z setkami wyników, które
                  trzeba filtrować ręcznie.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border"
                  style={{ backgroundColor: "#334155", borderColor: "#475569" }}
                >
                  <Clock className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-6">Skraca czas researchu o 75%</h3>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  Zamiast godzin spędzonych na przekopywaniu się przez setki orzeczeń niezwiązanych z tematem — pięć
                  kluczowych wyroków z automatycznymi podsumowaniami w mniej niż pięć minut. GAVELO to realna
                  oszczędność czasu i nowy standard w branży.
                </p>
              </div>
              <div
                className="rounded border p-12 flex items-center justify-center min-h-[300px]"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
              >
                <div className="text-center">
                  <Clock className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-500 font-light">75% oszczędności czasu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-12 lg:px-20" style={{ backgroundColor: "#01161e" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-slate-500 mb-6 font-light tracking-wider">NASZE USŁUGI</div>
            <h2 className="text-4xl font-serif font-light text-white mb-8 leading-tight">
              Kontekstowa wyszukiwarka orzeczeń sądowych
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
            >
              <CardHeader className="pb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border"
                  style={{ backgroundColor: "#334155", borderColor: "#475569" }}
                >
                  <Scale className="w-6 h-6 text-slate-400" />
                </div>
                <CardTitle className="text-lg font-serif font-light">Automatyczne streszczenia wyroków</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Otrzymuj kluczowe informacje z orzeczeń w formie zwięzłych, automatycznie generowanych streszczeń.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
            >
              <CardHeader className="pb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border"
                  style={{ backgroundColor: "#334155", borderColor: "#475569" }}
                >
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <CardTitle className="text-lg font-serif font-light text-white">
                  Błyskawiczne wyszukiwanie semantyczne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Znajdź dokładnie to, czego szukasz dzięki zaawansowanemu wyszukiwaniu kontekstowemu.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.5)", borderColor: "rgba(249, 115, 22, 0.2)" }}
            >
              <CardHeader className="pb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border"
                  style={{ backgroundColor: "#334155", borderColor: "#475569" }}
                >
                  <Brain className="w-6 h-6 text-slate-400" />
                </div>
                <CardTitle className="text-lg font-serif font-light text-white">
                  Wsparcie AI w procesie researchu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Inteligentny asystent, który rozumie kontekst i pomaga w analizie prawniczej.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-12 lg:px-20" style={{ backgroundColor: "#01161e" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm text-slate-500 mb-6 font-light tracking-wider">POZNAJ GAVELO</div>
            <h2 className="text-4xl font-serif font-light text-white mb-8 leading-tight">Poznaj nasz zespół</h2>
            <p className="text-lg text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
              Nasz zespół łączy specjalistów z obszaru prawa, technologii i analizy danych – od prawników z
              doświadczeniem w kancelariach, przez ekspertów AI i fullstack developerów, po analityków finansowych i
              koordynatorów projektów. Wspólnie pracujemy nad dopracowaniem każdego detalu narzędzia, łącząc wiedzę
              merytoryczną z najnowszymi rozwiązaniami technologicznymi oraz świeżym podejściem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
            >
              <CardContent className="p-8">
                <h4 className="text-xl font-serif font-light mb-2 text-white">Arkadiusz Kryska</h4>
                <p className="text-sm text-slate-500 mb-6 font-light">Koordynator i aspekty prawne projektu</p>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Student prawa IV roku, szczególnie lubujący się w prawie administracyjnym. Doświadczenie zdobył w
                  renomowanej kancelarii i we współpracy z prokuratorem, gdzie weryfikował orzecznictwo. Pomysłodawca,
                  inspiracją do projektu była sytuacja, w której ChatGPT wygenerował jego szefowi nieistniejące wyroki.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
            >
              <CardContent className="p-8">
                <h4 className="text-xl font-serif font-light mb-2 text-white">Mateusz Milewski</h4>
                <p className="text-sm text-slate-500 mb-6 font-light">Machine Learning Researcher</p>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Student Informatyki Analitycznej UJ, stażysta w Google, wielokrotny uczestnik konkursów
                  algorytmicznych. Odpowiada za architekturę backendu, integrację NLP i skalowalność systemu, dbając o
                  wysoką jakość kodu.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
            >
              <CardContent className="p-8">
                <h4 className="text-xl font-serif font-light mb-2 text-white">Jakub Wiśniewski</h4>
                <p className="text-sm text-slate-500 mb-6 font-light">Software developer, architekt systemu</p>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Kończy studia na AGH, laureat Huawei Tech Arena AI 2024. Ma doświadczenie w przetwarzaniu dużych
                  zbiorów danych w Nokii, gdzie rozwijał systemy o krytycznym znaczeniu operacyjnym. Stażysta w CERNie.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.3)", borderColor: "#334155" }}
            >
              <CardContent className="p-8">
                <h4 className="text-xl font-serif font-light mb-2 text-white">Paweł Rusak</h4>
                <p className="text-sm text-slate-500 mb-6 font-light">
                  Koordynator komunikacji i analizy potrzeb użytkowników
                </p>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Student fizyki UW z doświadczeniem w analizie potrzeb użytkowników i komunikacji technicznej.
                  Odpowiada za dokumentację projektową, przygotowanie materiałów konkursowych i budowanie relacji z
                  partnerami prawniczymi.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 5 */}
            <Card
              className="text-white border"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.5)", borderColor: "rgba(249, 115, 22, 0.2)" }}
            >
              <CardContent className="p-8">
                <h4 className="text-xl font-serif font-light mb-2 text-white">Igor Kocoń</h4>
                <p className="text-sm text-slate-500 mb-6 font-light">Operacje, rozwój i finanse</p>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Student ekonomii z trzyletnim doświadczeniem w logistyce i zarządzaniu zespołami. Zarządza finansami i
                  budżetem start-upu, przygotowuje dokumenty do dotacji oraz reprezentuje projekt na konferencjach
                  branżowych.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 border-t" style={{ backgroundColor: "#01161e", borderColor: "#334155" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <Scale className="w-4 h-4" style={{ color: "#01161e" }} />
              </div>
              <span className="font-serif font-light text-lg">GAVELO</span>
            </div>
            <div className="text-sm text-slate-500 font-light">
              <p>Kontakt: +48 882 069 684</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
