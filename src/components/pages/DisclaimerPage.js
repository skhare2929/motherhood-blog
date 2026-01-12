import React from 'react';
import HighlightBox from '../common/HighlightBox';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const DisclaimerPage = () => {
  usePageSEO(pageSEO.disclaimer.title, pageSEO.disclaimer.description);

  return (
    <div className="page">
      <section className="content-section">
        <h2>Disclaimer</h2>

        <h3>Not Medical or Professional Advice</h3>
        <p>
          The content on this blog is based on my personal experiences as a mother. It is for informational
          and entertainment purposes only. <strong>Nothing on this blog should be considered medical advice,
          professional guidance, or expert recommendations.</strong>
        </p>
        <p>
          I am not a doctor, pediatrician, lactation consultant, sleep consultant, nutritionist, therapist,
          or any other type of certified professional. I'm simply a mom sharing what has worked (and hasn't
          worked) for my family.
        </p>

        <h3>Always Consult Healthcare Professionals</h3>
        <p>
          For any questions or concerns about your child's health, development, nutrition, or well-being,
          please consult with qualified professionals, including:
        </p>
        <ul>
          <li>Your child's pediatrician or family doctor</li>
          <li>Licensed lactation consultants for feeding concerns</li>
          <li>Registered dietitians for nutrition questions</li>
          <li>Mental health professionals for postpartum or parenting mental health support</li>
          <li>Other certified specialists relevant to your specific situation</li>
        </ul>

        <h3>Every Child is Different</h3>
        <p>
          What worked for my child may not work for yours, and that's completely normal. Every baby is unique,
          every family is different, and every parenting journey is personal. Please use your own judgment and
          consult with professionals when making decisions about your child's care.
        </p>

        <h3>Your Responsibility</h3>
        <p>
          By reading this blog, you acknowledge that you are responsible for your own decisions regarding your
          child's health and care. I cannot be held liable for any actions you take based on information found
          on this blog.
        </p>

        <HighlightBox>
          <strong>Bottom Line:</strong> When in doubt about your child's health or development, always consult
          with qualified healthcare professionals. Trust your instincts, and don't hesitate to seek expert
          guidance. Your child's well-being is too important to leave to chance.
        </HighlightBox>
      </section>
    </div>
  );
};

export default DisclaimerPage;
