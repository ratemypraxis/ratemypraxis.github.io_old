#!/usr/bin/env python
# coding: utf-8

# # Event Score Generator by Sam Hafferty

# In[1]:


import sys
get_ipython().system('conda install -c conda-forge -y --prefix {sys.prefix} spacy')


# In[2]:


import sys
get_ipython().system('{sys.executable} -m spacy download en_core_web_md')


# In[3]:


get_ipython().system('pip install tracery')


# In[4]:


import spacy


# In[5]:


from spacy.lang.en import English
nlp = English()
tokens = nlp("Some\nspaces  and\ttab characters")
tokens_text = [t.text for t in tokens]
assert tokens_text == ["Some", "\n", "spaces", " ", "and", "\t", "tab", "characters"]


# In[6]:


import tracery
from tracery.modifiers import base_english


# In[7]:


import re


# In[8]:


nlp = spacy.load('en_core_web_md')


# In[9]:


text1 = open("liveOn24Hours.txt", encoding= 'utf-8').read().strip()


# In[10]:


text2 = open("keepingFitAllTheWay.txt", encoding= 'utf-8').read().strip()


# In[11]:


text3 = open("thePersonAndWorkOfTheHolySpirit.txt", encoding= 'utf-8').read().strip()


# In[12]:


text4 = open("cookingWithSevenUp.txt", encoding= 'utf-8').read().strip()


# In[13]:


texts = text1 + text2 + text3 + text4 


# In[14]:


sp_chars = [';', ':', '!', "*", "1", "_", "-", ".",",", "©", "Fiftysix", "ft"]


# In[15]:


for i in sp_chars : 
    texts = texts.replace(i, '') 


# In[16]:


for x in texts:
    a_string = x;
    alphanumeric = " "
    for character in a_string:
        if character.isalnum():
            alphanumeric += character


# In[17]:


doc = nlp(texts)


# In[18]:


for i in doc:
    i.text.replace("\n", " ")      
    i.text.replace(" ", " ")


# In[19]:


words = [w for w in list(doc) if w.is_alpha]
entities = list(doc.ents)


# In[20]:


def flatten_subtree(st):
    return ''.join([w.text_with_ws for w in list(st)]).strip().rstrip()


# In[21]:


verbs = [w for w in words if w.pos_ == "VERB"]
adjs = [w for w in words if w.pos_ == "ADJ"]
advs = [w for w in words if w.pos_ == "ADV"]
nouns = [w for w in words if w.pos_ == "NOUN"]
vrb = [str(veb) for veb in verbs]
adj = [str(aj) for aj in adjs]
adv = [str(av) for av in advs]
non = [str(no) for no in nouns]
vvv = [item.lower().strip().rstrip()for item in vrb]
ada = [item.lower().strip().rstrip()for item in adj]
ava = [item.lower().strip().rstrip()for item in adv]
nnn = [item.lower().strip()for item in non]


# In[22]:


presents = [item.text for item in doc if item.tag_ == 'VB']
pasts = [item.text for item in doc if item.tag_ == 'VBN']
mores = [item.text for item in doc if item.tag_ == 'RBR']
noun_sins = [item.text for item in doc if item.tag_ == 'NN']
throughs = [item.text for item in doc if item.tag_ == 'RP']
end_puncs = [item.text for item in doc if item.tag_ == '.']
verbing = [item.text for item in doc if item.tag_ == 'VBG']
c_adverb = [item.text for item in doc if item.tag_ == 'RBR']
preposition = [item.text for item in doc if item.tag_ == 'IN']
present = [item.lower().strip().rstrip()for item in presents]
past = [item.lower().strip().rstrip()for item in pasts]
more = [item.lower().strip().rstrip()for item in mores]
noun_sin = [item.lower().strip().rstrip()for item in noun_sins]
through = [item.lower().strip().rstrip()for item in throughs]
end_punc = [item.lower().strip().rstrip()for item in end_puncs]
ving = [item.lower().strip().rstrip()for item in verbing]
cadv = [item.lower().strip().rstrip()for item in c_adverb]
prep = [item.lower().strip().rstrip()for item in preposition]


# In[23]:


time = [e for e in entities if e.label_ == "TIME"]
ordinals = [e for e in entities if e.label_ == "ORDINAL"]
quantity = [e for e in entities if e.label_ == "QUANTITY"]
tims = [str(tim) for tim in time]
ordi = [str(ords) for ords in ordinals]
quant = [str(quan) for quan in quantity]
ttt = [item.lower().strip().rstrip().replace("\n", " ")for item in tims]
ooo = [item.lower().strip().rstrip().replace("\n", " ")for item in ordi]
qqq = [item.lower().strip().replace("\n", " ")for item in quant]


# In[27]:


noun_sin = [item.lower().strip().rstrip()for item in noun_sins]

start = "\033[1m"
end = "\033[0;0m"

user = input("Enter any noun or 'surprise' for something random: ")
if re.match('surprise', user): 
  use =  noun_sin
else:
  use =  user

rules = {
    "morigin": "#[random:#randoms#][noun:#nouns#]#",    
    "title" : "#noun.capitalize# #prep# #random.capitalize#",   
    "tasks1" : ["#o1##task1#\n \n#o2##task2#\n \n#o3##task3#\n \n#o4##task4#\n \n#o5##task5#"],
    "tasks2" : ["#oo1##task1#\n \n#oo2##task2#\n \n#oo3##task3#\n \n#oo4##task4#\n \n#oo5##task5#"],
    "tasks3" : ["#ooo1##task1#\n \n#ooo2##task2#\n \n#ooo3##task3#\n \n#ooo4##task4#\n \n#ooo5##task5#"],
    "task1": ["#verb.capitalize# #prep# #adj# #random#"],  
    "task2": ["#verb.capitalize# #time# #prep# #noun#"],    
    "task3": ["#verb.capitalize# #random.s#"],  
    "task4": ["#verb.capitalize# #time# #prep# #noun#"],
    "task5": ["#verb.capitalize# for #time# in #cadv# #random#"],
    "time": ttt,
    "q": qqq,
    "adj": ada,
    "verb": present,
    "nouns": nnn,
    "randoms": use,
   # "randoms": noun_sin,
    "verbing": ving,
    "prep": prep,
    "cadv": cadv,
    "past": pasts,
    "o1": "First: ",
    "o2": "Second: ",
    "o3": "Third: ",
    "o4": "Fourth: ",
    "o5": "Fifth: ",
    "oo1": ["Start: ", "Begin: ", "Enter: "],
    "oo2": "Next: ",
    "oo3": "After: ",
    "oo4": "Then: ",
    "oo5": ["Finally: ", "Exit: ", "Fin: ", "Finale: "],
    "ooo1": ["Morning: ", "Dawn: "],
    "ooo2": "Late Morning: ",
    "ooo3": ["Afternoon: ", "High noon: "],
    "ooo4": "Evening: ",
    "ooo5": ["Night: ", "Dusk: "],
    "tasks": ["#tasks1#", "#tasks2#", "#tasks3#"]
}
grammar = tracery.Grammar(rules)
grammar.add_modifiers(base_english)
for i in range(1):
    print()
    print(start + grammar.flatten("#[#morigin#]title#\n \n#") + end + grammar.flatten("#tasks#"))

