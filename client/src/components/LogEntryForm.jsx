import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { addLogEntry } from '../Api/API'

const LogEntryForm = ({ location, onClose }) => {
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async data => {
    setLoading(true);
    try {
      await addLogEntry({ ...data, ...location });
      onClose();
    } catch (error) {
      setError('Error creating log');
      setLoading(false);
    }
  };

  console.log(hasError);

  return (
    <form
      className="entry-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {hasError && 
        <h5 className="entry-form__error-message">
          {hasError}
        </h5>
      }

      <label htmlFor="title">Title</label>
      <input {...register("title", { required: true })} />
      {errors.title && <span>Title is required</span>}

      <label htmlFor="description">Description</label>
      <textarea rows={3} {...register("description")} />

      <label htmlFor="comments">Comment</label>
      <textarea rows={3} {...register("comments")} />

      <label htmlFor="image">Image</label>
      <input {...register("image")} />

      <label htmlFor="visit_date">Visit date</label>
      <input type="date" {...register("visit_date", { required: true })} />
      {errors.visit_date && <span>Visit date is required</span>}

      <button
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        {isLoading ? 'Creating entry...' : 'Create entry'}
      </button>
    </form>);
};

export default LogEntryForm;
