# LangLearn

LangLearn, dil öğrenme sürecini kolaylaştırmak için geliştirilmiş bir web uygulamasıdır. 

## Proje Yapısı

Proje, aşağıdaki ana bölümlerden oluşmaktadır:

- **Backend**: API'leri sağlayan ve veritabanı işlemlerini yöneten bir .Net Core uygulaması.
- **Frontend**: Kullanıcı arayüzünü sağlayan bir Angular uygulaması.
- **Veritabanı**: İlerlemeleri saklayan bir MongoDB veritabanı.

## Kurulum
### Gereksinimler
- .NET Core SDK (8 veya üzeri)
- Node.js (14.x veya üzeri)
- Angular CLI (11.x veya üzeri)
- MongoDB (4.x veya üzeri)
  
### Backend
LangLearninWebAPI projesini çalıştırmak için aşağıdaki adımları izleyin:
1. Projeyi indirin veya klonlayın.
2. Proje dizinine gidin.
3. `dotnet restore` komutunu çalıştırarak bağımlılıkları yükleyin.
4. `dotnet run` komutunu çalıştırarak uygulamayı başlatın.
5. Aşağıdaki JSON dosyalarını kullanarak veritabanını doldurun:
   - `src/assets/courses/details.json` => swaggerda kullanılacak olan servis `/api/courses/add (http://localhost:5110/swagger/index.html)`
   örnek json:
    ```json
        {
            "title": "Advanced German",
            "description": "Master the German language with advanced lessons.",
            "instructor": "Alice Johnson",
            "content": [
                "Advanced Grammar",
                "Literature",
                "Fluency Practice"
            ],
            "duration": "5 hours",
            "difficulty": "Advanced"
        }
    ```

### Frontend
LangLearninWeb projesini çalıştırmak için aşağıdaki adımları izleyin:
1. Projeyi indirin veya klonlayın.
2. Proje dizinine gidin.
3. `npm install` komutunu çalıştırarak bağımlılıkları yükleyin.
4. `ng serve` komutunu çalıştırarak uygulamayı başlatın.
5. Tarayıcınızda `http://localhost:4200` adresine gidin.