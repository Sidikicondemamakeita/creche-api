import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentsModule } from './parents/parents.module';
import { EstablishmentsModule } from './establishments/establishments.module';
import { ActivitiesModule } from './activities/activities.module';

import { PersonelsModule } from './personels/personels.module';
import { SituationsModule } from './situations/situations.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ChildrenModule } from './children/children.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import Handlebars from 'handlebars';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { PresencesModule } from './presences/presences.module';
import { ActivitieschildModule } from './activitieschild/activitieschild.module';
import { SocketModule } from './socket/socket.module';


@Module({  
  imports: [MongooseModule.forRoot('mongodb://localhost:27017', {dbName:"formationconde"}), UsersModule, ParentsModule, EstablishmentsModule, ActivitiesModule,  PersonelsModule, SituationsModule, CategoriesModule, AuthModule,
  
ConfigModule.forRoot({isGlobal:true}), MailerModule.forRoot({
  transport:{
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2f52628b49af8d",
      pass: "d87d53dd743a13"
    }
  },
  defaults:{
    from: '"No replay" <noreplay@exemple.com'
  },
  template:{
    dir: join(__dirname, 'templates'),
    adapter:new HandlebarsAdapter(),
    options:{
      strict: true
    }
  }

}),
  
ChildrenModule,
  
PresencesModule,
  
ActivitieschildModule,
  
SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
