import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  FirstName: String,
  MiddleName: String,
  LastName: String,
  Email: String,
  ModifiedDate: Date,
  ModifiedBy: String,
  DateOfBirth: Date,
  Phone: String,
  Role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", index: true }
});

// userSchema.statics.findByLogin = async function(login) {
//   let user = await this.findOne({ username: login });

//   if (!user)
//     user = await this.findOne({ email: login });

//   return user;
// };

// userSchema.pre('remove', function(next) {
//   this.model('Message').deleteMany({ user: this._id }, next);
// });

const User = mongoose.model('User', userSchema);

export default User;
