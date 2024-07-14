import styles from './DoctorAppointmentForm.module.css';

const DoctorAppointmentForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2>Doctor Appointment Form</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Patient Name *</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        pattern="[A-Za-z\s]+" 
                        title="Name should only contain letters." 
                    />
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.halfWidth}>
                        <label htmlFor="phone">Mobile No. *</label>
                        <input 
                            type="text" 
                            id="phone" 
                            name="phone" 
                            required 
                            pattern="\d{10}" 
                            title="Mobile number should be 10 digits." 
                        />
                    </div>
                    <div className={styles.ageField}>
                        <label htmlFor="age">Age *</label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age" 
                            required 
                            min="1" 
                            max="120" 
                            title="Please enter a valid age between 1 and 120." 
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>Gender *</label>
                    <div className={styles.radioGroup}>
                        <label><input type="radio" name="gender" value="male" required /> Male</label>
                        <label><input type="radio" name="gender" value="female" required /> Female</label>
                        <label><input type="radio" name="gender" value="other" required /> Other</label>
                    </div>
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.inlineLabelSelect}>
                        <label htmlFor="diabetes">Diabetes</label>
                        <select id="diabetes" name="diabetes" required>
                            <option value="">SELECT</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className={styles.inlineLabelSelect}>
                        <label htmlFor="bp">BP</label>
                        <select id="bp" name="bp" required>
                            <option value="">SELECT</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className={styles.smallButton}>SUBMIT</button>
            </form>
        </div>
    );
};

export default DoctorAppointmentForm;
