import glob
import gspread
from oauth2client.service_account import ServiceAccountCredentials

cred_files = glob.glob("*.credentials.json")
print(cred_files)
scope = ["https://spreadsheets.google.com/feeds"]
creds = ServiceAccountCredentials.from_json_keyfile_name(cred_files[0], scope)

client = gspread.authorize(creds)
sheet = client.open("Josh Finances").Bills

records = sheet.get_all_records()
print(records)
