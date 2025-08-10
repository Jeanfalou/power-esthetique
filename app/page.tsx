'use client'

import { motion } from 'framer-motion';
import Button from './components/ui/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './components/ui/Card';

const programs = [
  {
    title: 'Techniques de soins esthétiques',
    description: 'Visage, corps, hygiène & sécurité, appareils.',
  },
  {
    title: "Gestion d'entreprise",
    description: 'Business model, marketing local, finances, juridique.',
  },
  {
    title: 'Management de centre esthétique',
    description: "Recrutement, process, upsell, expérience client.",
  },
];

const steps = [
  {
    id: 1,
    title: "Quiz d'éligibilité",
    description: 'Vérifiez vos financements en 5 minutes.',
  },
  {
    id: 2,
    title: 'Analyse de projet',
    description: 'Définissez le parcours idéal avec un conseiller.',
  },
  {
    id: 3,
    title: 'Dossier personnalisé',
    description: 'Téléversement simple, check-list auto.',
  },
  {
    id: 4,
    title: 'Signature électronique',
    description: 'Contrats signés en ligne (Yousign/DocuSign).',
  },
  {
    id: 5,
    title: 'Paiement & financement',
    description: 'SEPA/CB, échéanciers, facture auto.',
  },
  {
    id: 6,
    title: 'Convocation & planning',
    description: 'Recevez vos accès et votre planning.',
  },
];

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <motion.section
        className="relative flex h-[85vh] items-center justify-center bg-gradient-to-br from-brandBlue via-blue-600 to-brandPink text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            className="mb-4 text-4xl font-extrabold sm:text-6xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Power Esthétique Formation
          </motion.h1>
          <motion.p
            className="mb-8 text-lg sm:text-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            La référence des formations esthétiques haut de gamme
          </motion.p>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="bg-brandPink text-white hover:opacity-90">
              Découvrir les formations
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Admissions section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-800">
            Votre parcours d'admission
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <motion.div key={s.id} whileHover={{ y: -4 }}>
                <Card className="h-full shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                        {s.id}
                      </span>
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{s.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-800">
            Formations phares
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -4 }}>
                <Card className="h-full shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-brandPink">
                      {p.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{p.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D placeholders section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-800">
            Immersion 3D
          </h2>
          <p className="mb-10 max-w-3xl text-gray-600">
            Placeholders prêts à remplacer par des scènes Three.js (Campus / Plateaux techniques / Résultats).
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {['Campus', 'Plateaux techniques', 'Résultats stagiaires'].map((t, i) => (
              <div
                key={i}
                className="relative h-56 overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-brandBlue via-blue-400 to-brandPink p-6 text-white"
              >
                <h3 className="text-2xl font-bold">{t}</h3>
                <span className="absolute inset-0 grid place-items-center text-5xl opacity-20">
                  3D
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
