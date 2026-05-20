import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const OPTIMIZED_DIR = join(PUBLIC_DIR, 'optimized');

if (!existsSync(OPTIMIZED_DIR)) {
  mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

const profileImagePath = join(PUBLIC_DIR, 'profile.jpg');

async function optimizeProfileImage() {
  console.log('Optimizing profile image...\n');

  try {
    const sizes = [
      { width: 64, suffix: '64w' },
      { width: 128, suffix: '128w' },
      { width: 192, suffix: '192w' },
    ];

    for (const size of sizes) {
      await sharp(profileImagePath)
        .resize(size.width, size.width, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(join(OPTIMIZED_DIR, `profile-${size.suffix}.webp`));

      console.log(`Created profile-${size.suffix}.webp`);

      await sharp(profileImagePath)
        .resize(size.width, size.width, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(join(OPTIMIZED_DIR, `profile-${size.suffix}.jpg`));

      console.log(`Created profile-${size.suffix}.jpg`);
    }

    await sharp(profileImagePath)
      .resize(400, 400, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(join(OPTIMIZED_DIR, 'profile-og.webp'));

    console.log('Created profile-og.webp');

    await sharp(profileImagePath)
      .resize(400, 400, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85 })
      .toFile(join(OPTIMIZED_DIR, 'profile-og.jpg'));

    console.log('Created profile-og.jpg\nDone.');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeProfileImage();
