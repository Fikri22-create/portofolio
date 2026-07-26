import { useState } from 'react';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import CertificateCard from '../components/cards/CertificateCard';
import Modal from '../components/common/Modal';
import { CERTIFICATES } from '../data/certificates';

const Certificates = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Credentials"
        title="Certificates"
        description="A collection of certifications and courses I’ve completed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATES.map((c, i) => (
          <CertificateCard
            key={c.id}
            certificate={c}
            onOpen={setActive}
            index={i}
          />
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
      >
        {active && (
          <div className="space-y-4">
            <div className="w-full h-[50vh] sm:h-[80vh] bg-black rounded-2xl overflow-hidden">
              <iframe
                src={`${active.file}#toolbar=0&view=FitH&zoom=page-width`}
                className="w-full h-full"
                title={active.title}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
              <p className="text-xs text-slate-400">
                {active.description}
              </p>

              <a
                href={active.file}
                download
                className="btn-primary flex items-center gap-2"
              >
                <HiOutlineArrowDownTray />
                Download
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Certificates;