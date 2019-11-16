import {
    useRef, useEffect, useState, useCallback
} from 'react';
import { isEquivalent } from '../ObjectUtils';

/**
 * This hooks records the previous value of an element before state change.
 * @param {Any} value - the value to be referenced.
 * @returns {Any}
 */
export const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

/**
 * Hook used to change the document title of the webpage;
 * @param {String} title - The name of the webpage.
 * @example
 * useDocumentTitle('WebPage Name')
 */
export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

/**
 * A hook used to manage an array.
 * @param {Array<Any>} initialArray - The initial array values.
 * @return {Object}
 */
export const useArray = (initialArray) => {
    const [value, setValue] = useState(initialArray);
    return {
        value,
        setValue,
        add: (a) => setValue((v) => [...v, a]),
        clear: () => setValue(() => []),
        removeById: (id) => setValue((arr) => arr.filter((v) => v && v.id !== id)),
        removeIndex: (index) => setValue((v) => [...v.slice(0, index), ...v.slice(index + 1)])
    };
};

/**
 * A hook to manage form input.
 * @param {Object} initialValues - sets the forms initial values
 * @param {Function} validate - the validation func
 * @param {Function} submit - the submit func
 * @return {Object}
 */
export const useForm = (initialValues, validate, submit) => {
    const [formValues, setFormValues] = useState({ ...initialValues });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * The handle submit function.
     * @param {*} event - the event
     */
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(formValues));
        setIsSubmitting(true);
    };

    /**
     * The reset form function
     */
    const handleReset = () => {
        setFormValues(initialValues);
        setErrors({});
        setIsSubmitting(false);
    };

    /**
     * The on input change event handler.
     * @param {*} event - the event that occurs
     */
    const handleChange = (event) => {
        if (event.persist)
            event.persist();

        setFormValues((valuesState) => ({
            ...valuesState,
            [event.target.name]: event.target.value
        }));
    };

    /**
     * Sets the 'formValues' value if initialValues is defined
     * as something other than an empty object.
     */
    // useEffect(() => {
    //     if (!isEquivalent(formValues, initialValues))// && !isCreateForm)
    //         setFormValues(initialValues);
    // }, [initialValues]);

    /**
     * Calls the submit function if there are no errors
     * and isSubmitting is set to true.
     */
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submit(formValues);
            handleReset();
        }
        setIsSubmitting(false);
    }, [errors]);

    return {
        formValues,
        errors,
        handleChange,
        handleSubmit,
        handleReset
    };
};
