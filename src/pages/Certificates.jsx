import SectionTitle from '../components/common/SectionTitle';
import CertificateCard from '../components/cards/CertificateCard';
import { CERTIFICATES } from '../data/certificates';

const Certificates = () => {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Credentials"
        title="Certificates"
        description="A collection of certifications and courses I've completed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((c, i) => (
          <CertificateCard
            key={c.id}
            certificate={c}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
