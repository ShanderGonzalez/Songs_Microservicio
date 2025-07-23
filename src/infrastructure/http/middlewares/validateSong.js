module.exports = (req, res, next) => {
  const { name, path } = req.body;
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//;

  if (!name || !path) {
    return res.status(400).json({ message: 'Name and path are required.' });
  }

  if (!youtubeRegex.test(path)) {
    return res.status(400).json({ message: 'Path must be a valid YouTube URL.' });
  }

  next();
};

