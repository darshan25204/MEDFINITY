import os
import json
import urllib.request
import urllib.parse
import time

OUTPUT_DIR = "public/images/products"
os.makedirs(OUTPUT_DIR, exist_ok=True)

ITEMS = [
    # ICU Beds
    ("medfinity-001", "hospital bed motorized"),
    ("medfinity-002", "hospital bed electric adjustable"),
    ("medfinity-003", "hospital bed side rails"),
    ("medfinity-004", "hospital bed crank manual"),
    ("medfinity-005", "hospital bed patient room"),
    ("medfinity-006", "hospital patient bed"),
    # Ward Care Beds
    ("medfinity-007", "fowler bed hospital"),
    ("medfinity-008", "hospital ward bed"),
    ("medfinity-009", "hospital bed wood"),
    ("medfinity-010", "semi fowler bed"),
    ("medfinity-011", "medical bed backrest"),
    ("medfinity-012", "clinical bed hospital"),
    ("medfinity-013", "nursing bed wood"),
    ("medfinity-014", "adjustable bed mattress"),
    # Ward & OT Furniture
    ("medfinity-015", "hospital plain bed"),
    ("medfinity-016", "hospital attendant bed"),
    ("medfinity-017", "hospital pediatric crib"),
    ("medfinity-018", "hospital sleeper chair"),
    ("medfinity-019", "examination couch medical"),
    ("medfinity-020", "examination table doctor"),
    ("medfinity-021", "gynaecological examination table"),
    ("medfinity-022", "medical examination table"),
    ("medfinity-023", "blood donor chair"),
    ("medfinity-024", "obstetric delivery bed"),
    ("medfinity-025", "gynaecological delivery table"),
    ("medfinity-026", "maternity delivery table"),
    ("medfinity-027", "operating table surgery"),
    # Trolleys, Stretcher, Carts
    ("medfinity-028", "emergency stretcher trolley"),
    ("medfinity-029", "hydraulic hospital stretcher"),
    ("medfinity-030", "stretcher on trolley"),
    ("medfinity-031", "patient transfer trolley"),
    ("medfinity-032", "folding stretcher ambulance"),
    ("medfinity-033", "emergency crash cart trolley"),
    ("medfinity-034", "anesthesia cart hospital"),
    ("medfinity-035", "crash cart resuscitation"),
    ("medfinity-036", "neonatal bassinet crib"),
    ("medfinity-037", "medical waste trolley"),
    ("medfinity-038", "basin stand hospital single"),
    ("medfinity-039", "basin stand double medical"),
    ("medfinity-040", "revolving stool medical"),
    ("medfinity-041", "linen trolley hospital"),
    ("medfinity-042", "bedside stool hospital"),
    ("medfinity-043", "medical step stool"),
    ("medfinity-044", "IV pole saline stand"),
    ("medfinity-045", "medical dressing trolley"),
    ("medfinity-046", "stainless steel instrument trolley"),
    ("medfinity-049", "mayo stand surgical"),
    ("medfinity-050", "laparoscopic trolley tower"),
    ("medfinity-051", "hospital bedside locker"),
    ("medfinity-052", "hospital bedside cabinet ABS"),
    ("medfinity-053", "overbed table gas spring"),
    ("medfinity-054", "overbed table hospital"),
    ("medfinity-057", "hospital folding screen"),
    ("medfinity-058", "oxygen cylinder trolley cart"),
    # Mobility
    ("medfinity-055", "commode wheelchair"),
    ("medfinity-056", "wheelchair folding chrome"),
    ("seneca-wheelchair", "transport wheelchair lightweight"),
    ("reclining-wheelchair", "reclining wheelchair"),
    ("snow-electric-wheelchair", "power wheelchair motorized"),
    ("stair-lift-wheelchair", "stair chair evacuation"),
    ("commode-va40", "commode chair folding"),
    ("commode-va60", "commode chair with wheels"),
    ("walker-mf10", "walking frame walker"),
    ("walker-mf50", "folding walker mobility"),
    ("walker-mf90", "wheeled walker rollator"),
    ("walker-mf120", "rollator walker seat"),
    ("commode-raiser", "raised toilet seat medical"),
    # Respiratory & Critical
    ("oxygen-concentrator-5l-10l", "oxygen concentrator medical"),
    ("oxygen-cylinder-set", "medical oxygen cylinder"),
    ("bipap-cpap-machine", "CPAP machine ventilator"),
    ("multipara-monitor", "vital signs patient monitor"),
    ("single-jar-suction", "phlegm suction unit medical"),
    ("double-jar-suction", "surgical suction machine"),
    ("air-mattress-kit", "alternating pressure air mattress"),
    ("infant-radiant-warmer", "infant warmer radiant"),
    ("nebulizer-piston", "medical compressor nebulizer"),
    ("ambu-bag-silicone", "bag valve mask resuscitator"),
    # Diagnostics
    ("pulse-oximeter", "fingertip pulse oximeter"),
    ("sphygmomanometer-dial", "sphygmomanometer blood pressure"),
    ("fetal-doppler", "fetal doppler monitor"),
    ("glucometer-kit", "blood glucose meter"),
    ("infrared-thermometer", "infrared thermometer forehead"),
    ("digital-weighing-scale-baby", "baby weighing scale medical"),
    # Surgical, Sterilization & Consumables
    ("surgical-instruments-set", "surgical scissors forceps"),
    ("stainless-steel-holloware", "kidney dish stainless steel"),
    ("autoclave-sterilizer", "autoclave sterilizer medical"),
    ("fumigator-fogger", "fogger machine aerosol"),
    ("bio-hazard-dustbins", "biohazard waste bin"),
    ("hospital-waiting-chairs", "hospital waiting chairs bench"),
    ("adult-diapers-hygiene", "adult diapers incontinence"),
    # Accessories
    ("head-leg-bows", "hospital bed headboard"),
    ("tuck-away-side-rails", "hospital bed side rails"),
    ("hospital-mattress-foam", "hospital mattress waterproof"),
    ("castors-central-locking", "caster wheels medical"),
    ("expandable-food-tray", "overbed dining tray")
]

def search_and_download(item_id, query):
    target_path = os.path.join(OUTPUT_DIR, f"{item_id}.jpg")
    if os.path.exists(target_path) and os.path.getsize(target_path) > 5000:
        print(f"Skipping {item_id}, already exists.")
        return True

    # Search Wikimedia Commons
    encoded = urllib.parse.quote(query)
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={encoded}&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url|mime&format=json"
    req = urllib.request.Request(search_url, headers={"User-Agent": "MedfinitySurgicalApp/1.0 (info@medfinityindia.com)"})
    
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            pages = data.get("query", {}).get("pages", {})
            for page in pages.values():
                info = page.get("imageinfo", [])
                if info and "url" in info[0]:
                    img_url = info[0]["url"]
                    # download image
                    img_req = urllib.request.Request(img_url, headers={"User-Agent": "MedfinitySurgicalApp/1.0 (info@medfinityindia.com)"})
                    with urllib.request.urlopen(img_req, timeout=12) as img_resp:
                        content = img_resp.read()
                        if len(content) > 3000:
                            with open(target_path, "wb") as f:
                                f.write(content)
                            print(f"✓ Downloaded {item_id} ({len(content)} bytes)")
                            return True
    except Exception as e:
        print(f"Failed {item_id} with query '{query}': {e}")
    
    return False

def main():
    print(f"Starting image fetch for {len(ITEMS)} items...")
    success = 0
    for item_id, query in ITEMS:
        if search_and_download(item_id, query):
            success += 1
        time.sleep(0.3)
    print(f"Finished: {success}/{len(ITEMS)} images downloaded.")

if __name__ == "__main__":
    main()
