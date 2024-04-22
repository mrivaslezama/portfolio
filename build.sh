cd portfolio
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rm -rf public
unzip frontend.zip -d public
rm -f frontend.zip
git add .
git commit -m "next try del dia"
git push
deactivate