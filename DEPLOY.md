# Making your site live (GitHub Pages)

Your site is set up to use **GitHub Pages** with the custom domain **www.smilianjackcibic.com** (see `CNAME`).

## 1. Push your latest changes

From the project folder in Terminal:

```bash
cd /Users/smolion/Desktop/jiliansmack
git add .
git commit -m "Update site: visualisers, contact page, new assets"
git push origin main
```

## 2. Turn on GitHub Pages (if not already)

1. Open **https://github.com/cibician/jiliansmack**
2. Go to **Settings** → **Pages**
3. Under **Source**, choose **Deploy from a branch**
4. **Branch**: `main` — **Folder**: `/ (root)` — then **Save**
5. After a minute or two the site will be live at:
   - **https://cibician.github.io/jiliansmack**  
   - or **https://www.smilianjackcibic.com** if your domain DNS points to GitHub Pages

## 3. Custom domain (www.smilianjackcibic.com)

The `CNAME` file is already set. In your domain registrar (where you bought smilianjackcibic.com), add:

- **Type**: `CNAME`  
- **Name**: `www`  
- **Value**: `cibician.github.io`

Then in GitHub **Settings → Pages**, under **Custom domain**, enter `www.smilianjackcibic.com` and save. GitHub will then serve the site at that URL.

---

After this, every push to `main` will update the live site automatically.
