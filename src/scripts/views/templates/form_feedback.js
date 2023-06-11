const feedback = () => `
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit" id="buttonSubmit">Submit</button>
    </div>
`;

export default feedback;
