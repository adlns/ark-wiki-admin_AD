import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Accueil" description="Wiki ARK Admin FR">
      <main style={{ padding: '2rem' }}>
        <h1>Bienvenue sur le Wiki ARK Admin</h1>
        <p>Utilise la navigation à gauche pour consulter toutes les commandes du jeu !</p>
      </main>
    </Layout>
  );
}