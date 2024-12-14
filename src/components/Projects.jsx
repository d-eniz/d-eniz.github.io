import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PopupWindow from "./PopupWindow";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=200&width=300",
    details: `
# Donec quid anima certos est queat succedere

## Ponit grates ferrum quos aut carinam membra

Lorem markdownum flentes et perdere naides nescitve icto Siculo omnis alta
sparsitque nec pone possit. Concordia *potuit dextra* potitur curras dextera, et
vir: et casas nocenti lucem, columbis.

Lanugine mortales derexit nosse modo, et inter perdiderint atlas: est, ipsa
alter. Ab Avernae haec simulat cum saepe, nam est mirabilis faveas, et pes
querellae! Linquit Apis amplecti fuge **Ephyre** pepulere undis. Occupat
sternitque noctem.

1. Reparata enectum
2. Necis intrepidum edita
3. Conripimus referam curva foco cultis contigit quamvis
4. Quodque pacis canities poscebatur raptis se clamor

Animae ceciderat inquirit fugitque confluat duo securum
[rotave](http://inde.org/iubet-pugman.html) inutilior conata tecti, voluere ea
posito mollia, admissum? Membra iam sit Mycenida? Calido vellet fecere faciem,
*dixerat*. Ne morsu velatae, visa sedendo urbis crater auctor dum soror illa
loca maiores, ensem.

## Fas tenet

Vicibus manere caligine non doctos delapsam et longis primus nomen, at harenam.
Ocior et Cnosiaci concubitusque neutra. Patentibus potuit **bracchiaque arbor**
gaudia clara tu visum at tange luctus refugitque sperato, et has pari alvo
loquuntur! Iuveni semper cepit relicta.

- Sunt aquae fulmen radios corpora
- Locuti iubeo
- Patentes sed agat iuppiter silva iterum ignes
- Manibus saepe

Ego concita, de quae, **in ipsa**, quas Naxos *illas*! Penna Phoebeamque mille
Hippocoonte arida carebunt sanguine saepe coniunx murmure caesariem. Oscula nam
numinis acutae ac illam Caenis copia in Phinea *suam latravit*, pura. Spoliis
qualia concurrere *cubilia esse aegro*, est inter volucrum bellum odiique albis
secutae supponas, trepidans templo.

Turni et minus clavigeram vicem multa *riget quisque utque*. Amor telae nunc:
cornu quae *de origo rector*, bicorni, pugnavimus transire fundebat. Balearica
teneris: haustus mortalia nec quid, Mareoticaque non uterque magnum fuit
Charybdis rapitur lassos modicisque motus.

    `,
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    details: `
# Donec quid anima certos est queat succedere

## Ponit grates ferrum quos aut carinam membra

Lorem markdownum flentes et perdere naides nescitve icto Siculo omnis alta
sparsitque nec pone possit. Concordia *potuit dextra* potitur curras dextera, et
vir: et casas nocenti lucem, columbis.

Lanugine mortales derexit nosse modo, et inter perdiderint atlas: est, ipsa
alter. Ab Avernae haec simulat cum saepe, nam est mirabilis faveas, et pes
querellae! Linquit Apis amplecti fuge **Ephyre** pepulere undis. Occupat
sternitque noctem.

1. Reparata enectum
2. Necis intrepidum edita
3. Conripimus referam curva foco cultis contigit quamvis
4. Quodque pacis canities poscebatur raptis se clamor

Animae ceciderat inquirit fugitque confluat duo securum
[rotave](http://inde.org/iubet-pugman.html) inutilior conata tecti, voluere ea
posito mollia, admissum? Membra iam sit Mycenida? Calido vellet fecere faciem,
*dixerat*. Ne morsu velatae, visa sedendo urbis crater auctor dum soror illa
loca maiores, ensem.

## Fas tenet

Vicibus manere caligine non doctos delapsam et longis primus nomen, at harenam.
Ocior et Cnosiaci concubitusque neutra. Patentibus potuit **bracchiaque arbor**
gaudia clara tu visum at tange luctus refugitque sperato, et has pari alvo
loquuntur! Iuveni semper cepit relicta.

- Sunt aquae fulmen radios corpora
- Locuti iubeo
- Patentes sed agat iuppiter silva iterum ignes
- Manibus saepe

Ego concita, de quae, **in ipsa**, quas Naxos *illas*! Penna Phoebeamque mille
Hippocoonte arida carebunt sanguine saepe coniunx murmure caesariem. Oscula nam
numinis acutae ac illam Caenis copia in Phinea *suam latravit*, pura. Spoliis
qualia concurrere *cubilia esse aegro*, est inter volucrum bellum odiique albis
secutae supponas, trepidans templo.

Turni et minus clavigeram vicem multa *riget quisque utque*. Amor telae nunc:
cornu quae *de origo rector*, bicorni, pugnavimus transire fundebat. Balearica
teneris: haustus mortalia nec quid, Mareoticaque non uterque magnum fuit
Charybdis rapitur lassos modicisque motus.

    `,
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    details: `
# Donec quid anima certos est queat succedere

## Ponit grates ferrum quos aut carinam membra

Lorem markdownum flentes et perdere naides nescitve icto Siculo omnis alta
sparsitque nec pone possit. Concordia *potuit dextra* potitur curras dextera, et
vir: et casas nocenti lucem, columbis.

Lanugine mortales derexit nosse modo, et inter perdiderint atlas: est, ipsa
alter. Ab Avernae haec simulat cum saepe, nam est mirabilis faveas, et pes
querellae! Linquit Apis amplecti fuge **Ephyre** pepulere undis. Occupat
sternitque noctem.

1. Reparata enectum
2. Necis intrepidum edita
3. Conripimus referam curva foco cultis contigit quamvis
4. Quodque pacis canities poscebatur raptis se clamor

Animae ceciderat inquirit fugitque confluat duo securum
[rotave](http://inde.org/iubet-pugman.html) inutilior conata tecti, voluere ea
posito mollia, admissum? Membra iam sit Mycenida? Calido vellet fecere faciem,
*dixerat*. Ne morsu velatae, visa sedendo urbis crater auctor dum soror illa
loca maiores, ensem.

## Fas tenet

Vicibus manere caligine non doctos delapsam et longis primus nomen, at harenam.
Ocior et Cnosiaci concubitusque neutra. Patentibus potuit **bracchiaque arbor**
gaudia clara tu visum at tange luctus refugitque sperato, et has pari alvo
loquuntur! Iuveni semper cepit relicta.

- Sunt aquae fulmen radios corpora
- Locuti iubeo
- Patentes sed agat iuppiter silva iterum ignes
- Manibus saepe

Ego concita, de quae, **in ipsa**, quas Naxos *illas*! Penna Phoebeamque mille
Hippocoonte arida carebunt sanguine saepe coniunx murmure caesariem. Oscula nam
numinis acutae ac illam Caenis copia in Phinea *suam latravit*, pura. Spoliis
qualia concurrere *cubilia esse aegro*, est inter volucrum bellum odiique albis
secutae supponas, trepidans templo.

Turni et minus clavigeram vicem multa *riget quisque utque*. Amor telae nunc:
cornu quae *de origo rector*, bicorni, pugnavimus transire fundebat. Balearica
teneris: haustus mortalia nec quid, Mareoticaque non uterque magnum fuit
Charybdis rapitur lassos modicisque motus.

    `,
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  // const expandedRef = useRef(null) // Removed as it's no longer needed

  // useEffect(() => {
  //   if (expandedProject && expandedRef.current) {
  //     expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //   }
  // }, [expandedProject])

  return (
    <section id="projects" className="bg-gray-900 py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <div
                className="bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-blue-500"
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {expandedProject && (
        <PopupWindow
          isOpen={expandedProject !== null}
          onClose={() => setExpandedProject(null)}
          title={expandedProject ? projects[expandedProject - 1].title : ""}
          image={expandedProject ? projects[expandedProject - 1].image : ""}
          content={expandedProject ? projects[expandedProject - 1].details : ""}
        />
      )}
    </section>
  );
};

export default Projects;
