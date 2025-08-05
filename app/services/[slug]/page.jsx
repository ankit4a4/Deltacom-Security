import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import servicesData from "../../../public/data/services.json"
import ServiceDetailClient from '../../../components/ServiceDetailClient'

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const service = servicesData.services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - ${service.subtitle} | Deltacom Security`,
    description: service.description,
    keywords: `${service.title}, security, DC Metro, surveillance, ${service.subtitle}`,
    openGraph: {
      title: `${service.title} - Deltacom Security`,
      description: service.description,
      images: [service.heroImage],
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
