import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { ContactForm } from './ContactForm';

export default function GetInTouch() {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('Form submitted:', { name, email, message });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmittedData({ name, email, message });
    setIsSubmitted(true);
    setIsExpanded(false);
  };

  const handleClick = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      setSubmittedData(undefined);
    }
    setIsExpanded(!isExpanded);
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    setIsEditing(true);
    setIsExpanded(true);
  };

  const handleResubmit = () => {
    setIsSubmitted(false);
    setSubmittedData(undefined);
    setIsEditing(false);
    setIsExpanded(true);
  };

  return (
    <div className="lg:w-full md:w-full space-y-4">
      {!isExpanded && (
        <Button
          onClick={handleClick}
          onEdit={handleEdit}
          onResubmit={handleResubmit}
          isSubmitted={isSubmitted}
          submittedData={submittedData}
        />
      )}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            // exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm 
              onSubmit={handleSubmit} 
              onCancel={handleCancel} 
              initialData={isEditing ? submittedData : undefined}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
