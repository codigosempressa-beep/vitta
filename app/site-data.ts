export const siteConfig = {
  whatsappDisplay: "(61) 99968-8725",
  whatsappNumber: "5561999688725",
  whatsappMessage: "Olá! Conheci a Vitta pelo site e gostaria de solicitar um orçamento.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  instagramUrl: null as string | null,
};

export const services = [
  { name: "Sofás", slug: "sofas", description: "Cuidado profissional para renovar a aparência e preservar seu sofá.", price: null, priceLabel: "Preço sob consulta", active: true, order: 1 },
  { name: "Poltronas", slug: "poltronas", description: "Higienização cuidadosa para poltronas mais limpas e bem conservadas.", price: null, priceLabel: "Preço sob consulta", active: true, order: 2 },
  { name: "Colchões", slug: "colchoes", description: "Processo profissional para remover a sujeira acumulada no uso diário.", price: null, priceLabel: "Preço sob consulta", active: true, order: 3 },
];

export const faqItems = [
  "Como funciona o orçamento?", "Como os preços são definidos?", "Quanto tempo dura o atendimento?", "Quanto tempo leva para secar?", "Quais estofados vocês higienizam?", "A Vitta atende minha região?", "Como faço para agendar?", "Como funciona o atendimento pelo WhatsApp?"
].map(question => ({ question, answer: "Resposta definitiva em preparação. Para receber orientação agora, fale com nossa equipe pelo WhatsApp." }));
