import mongoose from 'mongoose';

//schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 30,
            
          },
          email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
          },
          password: {
            type: String,
            required: true,
            /*minlength: [12, 'Password must be at least 12 characters long'],
            maxlength: [64, 'Password must be less than 64 characters long'],
            validate: {
              validator: function (value) {
                // At least one lowercase, one uppercase, one number, one special character, and no spaces
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[^\s]{12,64}$/;
                return regex.test(value);
              },
              message:
                'Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 128 characters long. Spaces are not allowed.',
            },*/
          },
          profilePicture: {
            type: String,
            default:
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          },
          isAdmin: {
            type: Boolean,
            default: false,
          },
        },
        { timestamps: true }
    );

    //model
    const User = mongoose.model('User', userSchema);

    export default User;